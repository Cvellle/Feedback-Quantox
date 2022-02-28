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

export const filterBy = (toMap, filterProp, filterAvoid) =>
  toMap.filter((el) => el[filterProp] == filterAvoid);

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

  const suggestionsList = arrayToLoop.filter((el) => {
    let final = toFilter ? el.id == toFilter : el;
    return final;
  });

  let mapped = suggestionsList.map((el, i) => {
    let currentObject = getLS("feedbackArray")[el.id - 1];
    return `<div class="feedback-item" id="${el.id}">
              <div class="feedback-item__left">
                <div class="upvotes ${
                  el.likedBy &&
                  el.likedBy.includes(getLS("currentUser").name)
                    ? "upvotes--highlighted"
                    : ""
                }">
                  <span class="arrow"></span>
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
    let localArray = getLS("suggestions");
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
  // fetch
  // const response = await fetch("/data/data.json", {
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   method: "GET"
  // })
  // const json = await response.json();

  // fill the object
  initialValues = {
    ...initialValues,
    feedbackArray: [...initialValues.feedbackArray, ...data.productRequests],
  };

  // set local storage
  for (const property in initialValues) {
    updateStorage(property, initialValues[property]);
  }

  let suggestions = filterBy(
    initialValues.feedbackArray,
    "status",
    "suggestion"
  );
  updateStorage("suggestions", suggestions);

  //call outer getSuggestions function
  getSuggestions(getLS("suggestions"));
}

// module invoked on load
window.addEventListener("load", fetchSuggestions);
window.addEventListener("popstate", fetchSuggestions);
