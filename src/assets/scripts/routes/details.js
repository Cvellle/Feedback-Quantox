// import { getSuggestions, initialValues } from "./getSuggestions";

import { initialValues } from "../modules/getSuggestions";
import { router } from "./router";

router.on("/item/:id", function () {
  let currentId = null;
  window.onpopstate = function (event) {
  if (event) {
    alert(location.pathname.split('/').pop())
      
  }
};

    let current = initialValues.feedbackArray.filter(el => el.id == currentId)
    console.log(current);

    document.body.innerHTML = `<section class="edit">
    <div class="edit__controls">
      <div class="back">
        <span class="arrow"></span>
        <span class="text">Go back</span>
      </div>
      <a href="/new-feedback" data-navigo>+ Edit Feedback</a>
    </div>
    <div class="edit__current">
      <div class="feedback">
        <div class="feedback-items-wraper">

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
        <div class="items-wrapper">
          <div class="item">
            <bold><span>0</span> Comments</bold>
            <div class="info">
              <div class="profile-image"></div>
              <div class="name">
                <bold>Elija m</bold>
                <div>@hex</div>
              </div>
              <span class="reply-activate">reply</span>
            </div>
            <div class="text">adssssssssssssssssssssssssssssadssssssssssssssssssssssssssssadssssssssssssssssssssssssssss</div>
            <div class="reply">
              <textarea placeholder="Type your reply here"></textarea>
              <button>Post Reply</button>
            </div>
          </div>
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
  });
  

// window.addEventListener("load", detailsLoad);

  
  
    

  