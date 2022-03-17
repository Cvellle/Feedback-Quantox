import { router } from "../routes/router";
import { addItemDetailsListener, goBack, setPreviousRoute } from "../shared/shared-functions";
import { getItems } from "../templates/details.template";
import {
  getLS,
  getSuggestions,
  updateStorage,
} from "./getSuggestions";

export function detailsModule(match, currentProp) {
  const count = document.querySelectorAll('.count-comments');
  const commentContent = document.querySelector(".add textarea");

  let feedbackArray = getLS("feedbackArray");
  let currentUser = getLS("currentUser");

  let passedCurrent = currentProp;
  // Add comments array where it is undefined
  passedCurrent &&
    !passedCurrent.comments &&
    (passedCurrent = {
      ...passedCurrent,
      comments: [],
    });

  // get the biggest comment id
  let maxCommentIds = [];
  let commentsLength = () => {
    feedbackArray &&
      feedbackArray.forEach((el) => {
        el.comments &&
          el.comments.forEach((c) => {
            maxCommentIds = [...maxCommentIds, el.id];
            !c.replies && (c = { ...c, replies: [] });
          });
      });
  };

  // Add comment
  const addCommentFunction = () => {
    commentsLength();
    let nextMax = Math.max(...maxCommentIds) + 1;
    maxCommentIds = [];
    let newComment = {
      content: commentContent.value,
      id: nextMax,
      user: {
        image: currentUser.image,
        name: currentUser.name,
        username: currentUser.username,
      },
    };
    // Spread old array with new comments
    let newCommentsArray = passedCurrent.comment
      ? [...passedCurrent.comments, newComment]
      : [newComment];
    // IT SHOULD ALSO BE SENT TO BACKEND

    // Spread old feedbackArray
    passedCurrent = {
      ...passedCurrent,
      comments: [...passedCurrent.comments, newComment],
    };

    feedbackArray = [
      ...feedbackArray.slice(0, match.data.id - 1),
      passedCurrent,
      ...feedbackArray.slice(match.data.id),
    ];

    // change HTML
    const items = document.querySelector(".items-wrapper");
    items.innerHTML = getItems(passedCurrent.comments, "comment");
    addEvenetsListeners();

    count.forEach((el) => { el.innerHTML = passedCurrent.comments.length })
    maxCommentIds = [...maxCommentIds, nextMax];

    updateStorage("feedbackArray", feedbackArray);
    getSuggestions(feedbackArray, match.data.id)
  };

  // Reply to post
  const addReplyFunction = (e) => {
    if (e.target.className !== "reply-btn") {
      return;
    }
    let indexOfComment = e.currentTarget.getAttribute("data-index");

    // Add comments replies where it is undefined
    [...Array(passedCurrent.comments.length).keys()].forEach((el, i) => {
      !passedCurrent.comments[i].replies &&
        (passedCurrent.comments[i] = {
          ...passedCurrent.comments[i],
          replies: [],
        });
    });

    let newReply = {
      content: e.target.previousElementSibling.value,
      replyingTo: e.target.getAttribute("data-reply-to"),
      user: {
        image: currentUser.image,
        name: currentUser.name,
        username: currentUser.username,
      },
    };

    let newCommentObject = {
      ...passedCurrent.comments[indexOfComment],
      replies: passedCurrent.comments[indexOfComment].replies.length
      ? [...passedCurrent.comments[indexOfComment].replies, newReply]
      : [newReply]
    }

    // Spread old object with new replies
    passedCurrent = {
      ...passedCurrent,
      comments: [
        ...passedCurrent.comments.slice(0, indexOfComment),
        newCommentObject,
        ...passedCurrent.comments.slice(indexOfComment + 1),
      ],
    };

    feedbackArray = [
      ...feedbackArray.slice(0, match.data.id - 1),
      passedCurrent,
      ...feedbackArray.slice(match.data.id),
    ];   
    // IT SHOULD ALSO BE SENT TO BACKEND

    updateStorage("feedbackArray", feedbackArray);
    feedbackArray = getLS('feedbackArray');

    e.target.previousElementSibling.previousElementSibling.innerHTML += getItems(
      passedCurrent.comments[indexOfComment].replies.slice(-1),
      "reply"
    );

    const currentWrapper = [
      ...document.querySelectorAll(
        ".item--comment>div+div+div>.replies-wrapper"
      ),
    ];

    addEvenetsListeners();
  };

  const replyShow = (e) => {
    e.currentTarget.parentElement.parentElement.lastElementChild.classList.toggle(
      "reply--visible"
    );
  };

  const countChar = (e) => {
    let charLeft = 250 - e.currentTarget.value.length;
    e.currentTarget.nextElementSibling.firstElementChild.firstElementChild.innerHTML =
      charLeft;
  };

  // set current route as return destination, and imported back function
  setPreviousRoute(match.url);

  const goToEdit = document.querySelector(".details__controls .edit-feedback");
  goToEdit.onclick = () => router.navigate("/item/edit/" + match.data.id);

  // Function for aading to newly set elements in HTML
  function addEvenetsListeners() {
    const back = document.querySelector(".details__controls .back");
    const addComment = document.querySelector(".post-comment");
    const commentContent = document.querySelector(".add textarea");
    const replyActivate = document.querySelectorAll(".reply-activate");
    const comment = document.querySelectorAll(
      ".items-wrapper > .item--comment"
    );

    back.addEventListener("click", goBack);
    addComment.addEventListener("click", addCommentFunction);
    replyActivate.forEach((el) => el.addEventListener("click", replyShow));
    commentContent.addEventListener("input", countChar);
    comment.forEach((el) => el.addEventListener("click", addReplyFunction));
  }

  addEvenetsListeners();
  addItemDetailsListener();
}
