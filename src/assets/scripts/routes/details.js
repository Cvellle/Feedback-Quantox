import { getSuggestions, initialValues } from "../modules/getSuggestions";
import { goBack, setPreviousRoute } from "../shared/shared-functions";
import { router } from "./router";
// import an from "../../images/user-images/image-anne.jpg";

router.on("/item/:id", function (match) {
  document.body.style = "background: #f2f2f2";
  let currentId = match.data.id;
  let current = initialValues.feedbackArray.filter(
    (el) => el.id == currentId
  )[0];

  let items = current.comments.map((el) => {
    return `
      <div class="item">
        <div class="info">
          <div class="profile-image">
            <div style="background-image: url(/src/assets/images/user-images/${el.user.image
              .split("/")
              .pop()})">
            </div>
          </div>
          <div class="name">
            <bold>${el.user.name}</bold>
            <div>@${el.user.username}</div>
          </div>
          <span class="reply-activate">reply</span>
        </div>
        <div class="text">${el.content}</div>
        <div class="reply">
          <textarea placeholder="Type your reply here"></textarea>
          <button>Post Reply</button>
        </div>
      </div>`;
  });

  const detailsTemplate = `
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
            <div class="feedback-item" id="${current.id}">
              <div class="feedback-item__left">
                <span class="arrow"></span>
                <div class="count">${current.upvotes}</div>
              </div>
              <div class="feedback-item__center">
                <h4 class="title">${current.title}</h4>
                <p>
                  ${current.description}
                </p>
                <div class="tag">
                  <span>${current.category}</span>
                </div>
              </div>
              <div class="feedback-item__right">
                <span class="comment"></span>
                <div class="count">
                  ${current.comments ? current.comments.length : 0}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="comments">
        <bold>
          <span>${current.comments ? current.comments.length : 0}</span>
          Comments
        </bold>
          <div class="items-wrapper">
            ${items.join("")}
          </div>
          <div class="add">
            <bold></bold>
            <textarea name="" id="" cols="30" rows="10" placeholder="Type your comment here"></textarea>
            <div class="post">
              <span>asd lef</span>
              <button>Post Comment</button>
            </div>
          </div>
        </div>
      </div>
    </section>`;

  document.body.innerHTML = detailsTemplate;

  // set current route as back destination, and imported back function
  setPreviousRoute();
  const back = document.querySelector(".details__controls .back");
  const goToEdit = document.querySelector(".details__controls .edit-feedback");

  goToEdit.onclick = () => router.navigate("/item/edit/" + currentId)

  back.addEventListener("click", goBack);
});
