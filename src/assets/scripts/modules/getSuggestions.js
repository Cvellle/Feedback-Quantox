import data from "/src/data/data";
import "/src/assets/scripts/routes/details";
import { addItemDetailsListener } from "../shared/shared-functions";

export let initialValues = {
  feedbackArray: [],
  getFilteredSuggestions: [],
  currentUser: {
    name: "Nikola Cvetic",
    username: "Cvele",
    image: "src/assets/images/user-images/nikola.jpg",
  },
  selectedItem: null,
  previousRoute: [],
};

export const updateStorage = (storageKey, value) => {
  window.localStorage.setItem(storageKey, JSON.stringify(value));
};

// Get speciffic item from LS
export const getLS = (storageKey) => {
  return JSON.parse(localStorage.getItem(storageKey));
};

// get the whole object or the current one
export const getInitialValues = (current) => {
  let returnValue =
    current == undefined
      ? JSON.parse(localStorage.getItem("initialValues"))
      : JSON.parse(localStorage.getItem("initialValues"))[current];
  return returnValue;
};

// get list results globally
export const getSuggestions = (arrayToLoop, toFilter) => {
  const feedbackWrapper = document.querySelector(".feedback-items-wrapper");
  const upvotes = document.querySelector(".upvotes");

  const suggestionsList = arrayToLoop.filter((el) => {
    let final = toFilter ? el.id == toFilter : el;

    return final;
  });

  let mapped = suggestionsList.map((el, i) => {
    let currentObject = getLS("feedbackArray")[el.id - 1];
    return `<div class="feedback-item" id="${el.id}">
              <div class="feedback-item__left">
                <div class="upvotes ${
                  currentObject.likedBy &&
                  currentObject.likedBy.includes(getLS("currentUser").name)
                    ? "upvotes--highlighted"
                    : ""
                }">
                  <span class="arrow"></span>
                  <input type="hidden"/>
                  <div class="count">${el.upvotes}</div>
              </div>
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
                <div class="count item-count-comments">
                  ${el.comments ? el.comments.length : 0}
                </div>
              </div>
            </div>`;
  });

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

  // fill the container
  feedbackWrapper.innerHTML = mapped.join("");

  const categoryBtns = document.querySelectorAll(".category");
  categoryBtns.forEach((el) => el.addEventListener("click", filterAll));

  addItemDetailsListener();
};

// initial fetch
async function fetchSuggestions() {
  const feedbackWrapper = document.querySelector(".feedback-items-wrapper");

  // fetch
  // const response = await fetch("/data/data.json");
  // const json = await response.json();

  // fill the object
  initialValues = {
    ...initialValues,
    feedbackArray: [...initialValues.feedbackArray, ...data.productRequests],
  };

  for (const property in initialValues) {
    // set local storage
    updateStorage(property, initialValues[property]);
  }

  initialValues.feedbackArray = data.productRequests;

  //call outer getSuggestions function
  getSuggestions(getLS("feedbackArray"));
}

// module invoked on load
window.addEventListener("load", fetchSuggestions);
window.addEventListener("popstate", fetchSuggestions);
