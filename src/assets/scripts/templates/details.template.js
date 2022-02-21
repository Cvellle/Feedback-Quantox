export const getItems = (toMap) => {
  let items =
      toMap && toMap.map((el) => {
      return `
            <div class="item">
              <div class="info">
                <div class="profile-image">
                  <div cass="${el && el.user && el.user.image && el.user.image.split("/").pop()}"
                     style="background-image: url(${el && el.user && el.user.image
                       .split("/")
                       .pop()})">
                  </div>
                </div>
                <div class="name">
                  <bold>${el && el.user.name}</bold>
                  <div>@${el && el.user.username}</div>
                </div>
                <span class="reply-activate">reply</span>
              </div>
              <div class="text">
                <span>${el.replies ? '@' + el.replyingTo : ''}</span>
                ${el && el.content}
              </div>
              <div class="reply">
                <div class="items-wrapper">
                    ${el.replies ? getItems(el.replies) : ''}
                </div>
                <textarea placeholder="Type your reply here"></textarea>
                <button>Post Reply</button>
              </div>
            </div>`;
    });

  return items && items.join("");
};

export const detailsTemplate = (passedCurrent) => {
  getItems(passedCurrent && passedCurrent.comments);
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
            <span class="arrow"></span>
            <div class="count">${passedCurrent.upvotes}</div>
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
            <div class="count">
              ${passedCurrent.comments ? passedCurrent.comments.length : 0}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comments">
    <bold>
      <span>${passedCurrent.comments ? passedCurrent.comments.length : ''}</span>
      <span>${passedCurrent.comments && passedCurrent.comments.length == 1 ? "Comment" : "Comments"}</span>
    </bold>
      <div class="items-wrapper">
        ${passedCurrent.comments && getItems(passedCurrent.comments)}
      </div>
      <div class="add">
        <bold>Add Comments</bold>
        <textarea name="" id="" cols="30" rows="10" placeholder="Type your comment here"></textarea>
        <div class="post">
          <span><span class="char-left"></span> characters left</span>
          <button class="post-comment">Post Comment</button>
        </div>
      </div>
    </div>
  </div>
</section>`;
};
            //   <div class="text"><span>${el.replies &&el.user.username}</span>${el && el.content}</div>
