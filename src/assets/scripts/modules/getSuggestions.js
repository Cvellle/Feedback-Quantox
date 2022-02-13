import { router } from "../routes/router";
import data from "/src/data/data";
import root from "../routes/root";
import "/src/assets/scripts/routes/details";

export const initialValues = {
  feedbackArray: null,
  currentUser: null,
};

export const getSuggestions = (arrayToLoop, toFilter) => {
  const feedbackWrapper = document.querySelector(".feedback-items-wrapper");
  // const sidebarStatusDisplay = document.querySelector(".sidebar__status-display");

  const suggestionsList = arrayToLoop.filter((el) => {
    let final = toFilter ? el.id == toFilter : el;

    return final;
  });

  let mapped = suggestionsList.map((el) => {
    return `<div class="feedback-item" id="${el.id}">
              <div class="feedback-item__left">
                <span class="arrow"></span>
                <div class="count">${el.upvotes}</div>
              </div>
              <div class="feedback-item__center">
                <h4 class="title">${el.title}</h4>
                <p>
                  ${el.description}
                </p>
                <div class="tag">
                  <span>${el.category}</span>
                </div>
              </div>
              <div class="feedback-item__right">
                <span class="comment"></span>
                <div class="count">
                  ${el.comments ? el.comments.length : 0}
                </div>
              </div>
            </div>`;
  });

  // fill the container
  feedbackWrapper.innerHTML = mapped.join("");

  // item recognition
  const feedbackItems = document.querySelectorAll(".feedback-item");
  feedbackItems &&
    feedbackItems.forEach((element) => {
      element.addEventListener("click", feedbackDetails);
    });
  function feedbackDetails(e) {
    router.navigate("/item/" + e.currentTarget.id);

    getSuggestions(initialValues.feedbackArray, e.currentTarget.id);
  }
};

async function fetchSuggestions() {
  const feedbackWrapper = document.querySelector(".feedback-items-wrapper");

  // fetch
  // const response = await fetch("/data/data.json");
  // const json = await response.json();

  // fill the object
  initialValues.feedbackArray = data.productRequests;

  //call outer getSuggestions function
  getSuggestions(data.productRequests);
}

// module invoked on load
window.addEventListener("load", fetchSuggestions);
window.addEventListener("popstate", fetchSuggestions);
