import { router } from "../routes/router";
import { goBack, setPreviousRoute } from "../shared/shared-functions";
import { getItems } from "../templates/details.template";
import { initialValues } from "./getSuggestions";

export function detailsModule(match, currentProp) {
  let passedCurrent = currentProp;
  const addComment = document.querySelector(".post-comment");
  const commentContent = document.querySelector(".add textarea");
  const replyContent = document.querySelectorAll(".reply textarea");
  const replyActivate = document.querySelectorAll(".reply-activate");
  const replyWrapper = document.querySelectorAll(".reply");
  const replyPost = document.querySelectorAll(".reply button");

  // Add comments array where it is undefined
  passedCurrent &&
    !passedCurrent.comments &&
    (passedCurrent = {
      ...passedCurrent,
      comments: [],
    });

  // get the biggest comment id
  let maxCommentIds = [];
  let commentsLength = () =>
    initialValues.feedbackArray &&
    initialValues.feedbackArray.forEach((el) => {
      el.comments &&
        el.comments.forEach(
          (el) => (maxCommentIds = [...maxCommentIds, el.id])
        );
    });

  // Add comment
  const addCommentFunction = () => {
    commentsLength();
    let nextMax = Math.max(...maxCommentIds) + 1;
    maxCommentIds = [];
    let newComment = {
      content: commentContent.value,
      id: nextMax,
      user: {
        image: initialValues.currentUser.image,
        name: initialValues.currentUser.name,
        username: initialValues.currentUser.username,
      },
    };
    // Spread old array with new comments
    let newCommentsArray = passedCurrent.comment
      ? [...passedCurrent.comments, newComment]
      : [newComment];
    // IT SHOULD ALSO BE SENT TO BACKEND

    // change HTML
    getItems(newCommentsArray);
    const items = document.querySelector(".items-wrapper");
    items.innerHTML += getItems(newCommentsArray.slice(-1));
    maxCommentIds = [...maxCommentIds, nextMax];
    addEvenetsListeners();
  };

  // Reply post
  const addReply = (e) => {
    !passedCurrent.comments.replies &&
      (passedCurrent = {
        // Add comments replies where it is undefined
        ...passedCurrent,
        comments: {
          ...passedCurrent.comments,
          replies: [],
        },
      });

    let newReply = {
      content: e.currentTarget.previousElementSibling.value,
      replyingTo: e.currentTarget.getAttribute("data-reply-to"),
      user: {
        image: "./assets/user-images/image-zena.jpg",
        name: initialValues.currentUser.name,
        username: initialValues.currentUser.username,
      },
    };

    // Spread old object with new replies
    passedCurrent = {
      ...passedCurrent,
      comments: {
        ...passedCurrent.comments,
        replies: passedCurrent.comments.replies
          ? [...passedCurrent.comments.replies, newReply]
          : [newReply],
      },
    };
    // IT SHOULD ALSO BE SENT TO BACKEND

    getItems(passedCurrent.comments.replies);
    const commentItems = document.querySelector(".items-wrapper");
    const replyItems = document.querySelector(".reply .items-wrapper");

    e.currentTarget.previousElementSibling.previousElementSibling.innerHTML +=
      getItems(passedCurrent.comments.replies.slice(-1));
    addEvenetsListeners();
  };

  const replyShow = (e) => {
    e.currentTarget.parentElement.parentElement.lastElementChild.classList.toggle(
      "reply--visible"
    );
  };

  // set current route as return destination, and imported back function
  setPreviousRoute(match.url);

  const back = document.querySelector(".details__controls .back");
  const goToEdit = document.querySelector(".details__controls .edit-feedback");

  goToEdit.onclick = () => router.navigate("/item/edit/" + match.data.id);

  // Function for aading to newly set elements in HTML
  function addEvenetsListeners() {
    const addComment = document.querySelector(".post-comment");
    const commentContent = document.querySelector(".add textarea");
    const replyContent = document.querySelectorAll(".reply textarea");
    const replyActivate = document.querySelectorAll(".reply-activate");
    const replyWrapper = document.querySelectorAll(".reply");
    const replyPost = document.querySelectorAll(".reply button");

    back.addEventListener("click", goBack);
    addComment.addEventListener("click", addCommentFunction);
    replyActivate.forEach((el) => el.addEventListener("click", replyShow));
    replyPost.forEach((el) => el.addEventListener("click", addReply));
  }

  addEvenetsListeners();
}
