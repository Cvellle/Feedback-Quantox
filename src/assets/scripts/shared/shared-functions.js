import {
  filterBy,
  getLS,
  getSuggestions,
  updateStorage,
} from "../modules/getSuggestions";
import { router } from "../routes/router";

let currentRoute = getLS("previousRoute") ? getLS("previousRoute") : '/';

// Set previous path on router navigate
export const setPreviousRoute = (currentPath) => {
  currentRoute = [...currentRoute, "/" + currentPath];
  currentRoute[currentRoute.length - 1] ==
    currentRoute[currentRoute.length - 2] &&
    (currentRoute = currentRoute.slice(0, currentRoute.length - 1));
};

// Go back to previous path element in array
export const goBack = (filterCurrent) => {
  currentRoute = currentRoute.slice(0, currentRoute.length - 1);
  let pathToGoBack = "/" + currentRoute.slice(-1);
  router.navigate(pathToGoBack);
  let arrayToMap =
    currentRoute.slice(-1) == '/'
      ? getLS("suggestions")
      : getLS("feedbackArray");
  let passedArray =
    currentRoute.slice(-1) !== "/roadmap"
      ? arrayToMap
      : arrayToMap.filter((el) => el.status == "planned");
  getSuggestions(
    passedArray,
    typeof filterCurrent == "string" ? filterCurrent : undefined
  );
};

// Details navigate
export function feedbackDetails(e) {
  if (
    e.target.classList.contains("upvotes") ||
    e.target.classList.contains("arrow") ||
    e.target.classList.contains("count")
  ) {
    return;
  }

  router.navigate("/item/" + e.currentTarget.id);
  getSuggestions(getLS("feedbackArray"), e.currentTarget.id);
}

// Filter by status
export const filterStatus = (returnArrayBoolean) => {
  // statuses count
  const statuses = ["planned", "in-progress", "live"];
  let finalScore = [];
  statuses.forEach((el) => {
    let filtered = getLS("feedbackArray").filter((f) => {
      return f["status"] == el;
    });
    !returnArrayBoolean &&
      document.querySelector(".sidebar__status--" + el + " .count") &&
      (document.querySelector(".sidebar__status--" + el + " .count").innerHTML =
        filtered.length);
    finalScore.push(filtered);
  });
  if (returnArrayBoolean) return finalScore;
};

// Sort
export const sortItems = (e) => {
  const selectSort = document.querySelector(".feedback__sort .current");
  const checkMarks = document.querySelectorAll(".feedback__sort .checked");
  let current = e.currentTarget;
  let filterBy = current.getAttribute("filter-by");
  let direction = current.getAttribute("data-direction");

  selectSort.innerHTML = current.firstElementChild.innerHTML;
  checkMarks.forEach((el) => (el.style.display = "none"));
  current.lastElementChild.style.display = "block";

  let sorted = getLS("suggestions").sort((a, b) => {
    // check if comments object exists
    let aCheck = a[filterBy] ? a[filterBy].length : 0;
    let bCheck = b[filterBy] ? b[filterBy].length : 0;
    // check if the value is an obect or a number - comments length or upvotes
    let aValue = typeof a[filterBy] == "object" ? aCheck : a[filterBy];
    let bValue = typeof a[filterBy] == "object" ? bCheck : b[filterBy];

    if (direction == "normal") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue > bValue ? -1 : 1;
    }
  });

  getSuggestions(sorted);
};

export const upvotesAdd = (e) => {
  let feedbackArray = getLS("feedbackArray");
  let currentUser = getLS("currentUser");
  let current = e.currentTarget;
  let spanCounter = current.lastElementChild;
  let currentHiddenInput = spanCounter.previousElementSibling;
  // Values for item object spread
  let newUpvotesNumber = 0;
  let newLikes =
    feedbackArray[e.currentTarget.parentNode.parentNode.id - 1].likedBy &&
    feedbackArray[e.currentTarget.parentNode.parentNode.id - 1].likedBy;
  let currentElement = e.currentTarget.lastElementChild;
  if (
    // If there is user's name in the likedBy array
    feedbackArray[e.currentTarget.parentNode.parentNode.id - 1].likedBy &&
    feedbackArray[
      e.currentTarget.parentNode.parentNode.id - 1
    ].likedBy.includes(currentUser.name)
  ) {
    currentElement.innerHTML =
      +currentElement.innerHTML - 1;
    currentHiddenInput.value = "";
    e.currentTarget.classList.remove("upvotes--highlighted");
    newUpvotesNumber = -1;
    newLikes = newLikes.slice().filter((el) => {
      el !== currentUser.name;
    });
  } else {
    // Initial click goes here - no likedBy property at the moment
    currentElement.innerHTML =
      +currentElement.innerHTML + 1;
    currentHiddenInput.value = currentUser.name;
    e.currentTarget.classList.add("upvotes--highlighted");
    newUpvotesNumber = 1;

    newLikes = feedbackArray[e.currentTarget.parentNode.parentNode.id - 1]
      .likedBy
      ? [
          ...feedbackArray[e.currentTarget.parentNode.parentNode.id - 1]
            .likedBy,
          currentUser.name,
        ]
      : [currentUser.name];
  }

  // Final spread with calculated values
  feedbackArray = [
    ...feedbackArray.slice(0, e.currentTarget.parentNode.parentNode.id - 1),
    {
      ...feedbackArray[e.currentTarget.parentNode.parentNode.id - 1],
      upvotes:
        +feedbackArray[e.currentTarget.parentNode.parentNode.id - 1].upvotes +
        newUpvotesNumber,
      likedBy: newLikes,
    },
    ...feedbackArray.slice(e.currentTarget.parentNode.parentNode.id),
  ];

  updateStorage("feedbackArray", feedbackArray);
  updateStorage(
    "suggestions",
    filterBy(getLS("feedbackArray"), "status", "suggestion")
  );
};

// Add function - after setting the innerHTML (repainting the ond one)
export const addItemDetailsListener = () => {
  const feedbackItems = document.querySelectorAll(".feedback-item");
  const upvotes = document.querySelectorAll(".upvotes");

  // item recognition
  feedbackItems &&
    feedbackItems.forEach((element) => {
      element.addEventListener("click", feedbackDetails);
    });
  // Upvotes change
  upvotes &&
    upvotes.forEach((element) => {
      element.addEventListener("click", upvotesAdd);
    });
};
