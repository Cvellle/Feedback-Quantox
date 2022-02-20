import data from "/src/data/data";
import "/src/assets/scripts/routes/details";
import { feedbackDetails } from "../shared/shared-functions";

export const initialValues = {
  feedbackArray: [],
  getFilteredSuggestions: [],
  currentUser: {
    name: "Nikola Cvetic",
  },
  selectedItem: null,
  previousRoute: [],
};

// get list results globally
export const getSuggestions = (arrayToLoop, toFilter) => {
  const feedbackWrapper = document.querySelector(".feedback-items-wrapper");
  const upvotes = document.querySelector(".upvotes");

  const suggestionsList = arrayToLoop.filter((el) => {
    let final = toFilter ? el.id == toFilter : el;

    return final;
  });

  let mapped = suggestionsList.map((el) => {
    return `<div class="feedback-item" id="${el.id}">
              <div class="feedback-item__left upvotes">
              <span class="arrow"></span>
              <input type="hidden"/>
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

  const filterAll = (e) => {
    let localArray = initialValues.feedbackArray;
    let filtered = localArray.filter((el, i, self) => {
      let returnValue =
        e.currentTarget.innerHTML == "All"
          ? el
          : el.category == e.currentTarget.innerHTML.toLowerCase();
      return returnValue;
    });

    getSuggestions(filtered);
  };

  const categoryBtns = document.querySelectorAll(".category");
  categoryBtns.forEach((el) => el.addEventListener("click", filterAll));

  // item recognition
  const feedbackItems = document.querySelectorAll(".feedback-item");
  feedbackItems &&
    feedbackItems.forEach((element) => {
      element.addEventListener("click", feedbackDetails);
    });
};

// initial fetch
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
