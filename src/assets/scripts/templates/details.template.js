import { getLS } from "../modules/getSuggestions";
import images from "../../images/user-images/*.jpg";

export const getItems = (toMap, elementKind) => {
  let items =
    toMap &&
    toMap.map((el, i) => {
      let fileName =
        el &&
        el.user &&
        el.user.image &&
        el.user.image.split("/").pop().split(".jpg")[0];

      let image = images[fileName];

      return `
        <div class="item item--${elementKind}" data-index="${i}">
          <div class="info">
            <div class="profile-image">
              <div class="${
                el && el.user && el.user.image && el.user.image.split("/").pop()
              }"
             ">
                <img src="${image}" /> 
              </div>  
            </div>
            <div class="name">
              <bold>${el && el.user.name}</bold>
              <div>@${el && el.user.username}</div>
            </div>
            <span class="reply-activate">reply</span>
          </div>
          <div class="text">
            <span>${
              !el.replies && el.replyingTo ? "@" + el.replyingTo : ""
            }</span>
            ${el && el.content}
          </div>
          <div class="reply">
            <div class="${!el.replies ? "replies-wrapper" : ""}">
              ${el.replies ? getItems(el.replies, "reply") : ""}
            </div>
            <textarea placeholder="Type your reply here"></textarea>
            <button class="reply-btn" data-reply-to="${
              el.user.username
            }">Post Reply</button>
          </div>
        </div>`;
    });

  return items && items.join("");
};

export const detailsTemplate = (passedCurrent) => {
  getItems(passedCurrent && passedCurrent.comments, "comment");
  return `
    <section class="details">
      <div class="details__controls">
        <div class="back">
          <span class="arrow"></span>
          <span class="text">Go back</span>
        </div>
        <span class="edit-feedback">+ Edit Feedback</span>
      </div>
      <div class="details__current">
        <div class="feedback feedback--details">
          <div class="feedback-items-wrapper">
            <div class="feedback-item" id="${passedCurrent.id}">
              <div class="feedback-item__left">
              <div class="upvotes ${
                passedCurrent.likedBy &&
                passedCurrent.likedBy.includes(getLS("currentUser").name)
                  ? "upvotes--highlighted"
                  : ""
              }">
                <span class="arrow"></span>
                <div class="count">${passedCurrent.upvotes}</div>
              </div>
              </div>
              <div class="feedback-item__center">
                <h4 class="title">${passedCurrent.title}</h4>
                <p>
                  ${passedCurrent.description}
                </p>
                <div class="tag">
                  <span>${passedCurrent.category}</span>
                </div>
              </div>
              <div class="feedback-item__right">
                <span class="comment"></span>
                <div class="count count-comments">
                  ${passedCurrent.comments ? passedCurrent.comments.length : 0}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="comments">
        <bold>
          <span class="count-comments">${
            passedCurrent.comments ? passedCurrent.comments.length : ""
          }</span>
          <span>${
            passedCurrent.comments && passedCurrent.comments.length == 1
              ? "Comment"
              : "Comments"
          }</span>
        </bold>
          <div class="items-wrapper">
            ${
              passedCurrent.comments
                ? getItems(passedCurrent.comments, "comment")
                : ""
            }
          </div>
          <div class="add">
            <bold>Add Comments</bold>
            <textarea name="" id="" cols="30" rows="10" placeholder="Type your comment here"></textarea>
            <div class="post">
              <span><span class="char-left" max="250">250</span> characters left</span>
              <button class="post-comment">Post Comment</button>
            </div>
          </div>
        </div>
      </div>
    </section>`;
};
