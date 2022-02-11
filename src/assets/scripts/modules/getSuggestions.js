import data from "/src/data/data"

export const initialValues = {
  feedbackArray: null,
  currentUserL: null,
};

export const getSuggestions = (arrayToLoop) => {
  const feedbackWrapper = document.querySelector(".feedback-items-wraper");
  // const sidebarStatusDisplay = document.querySelector(".sidebar__status-display");
  const suggestionsList = arrayToLoop.map((el) => {
    return `<div class="feedback-item">
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
              <div class="count">${el.comments ? el.comments.length : 0}</div>
            </div>
          </div>`;
  });
  feedbackWrapper.innerHTML = suggestionsList.join("");
};

async function fetchSuggestions() {
  const feedbackWrapper = document.querySelector(".feedback-items-wraper");

  // fetch
  // const response = await fetch("/data/data.json");
  // const json = await response.clone().json();
  
  // fill the object
  initialValues.feedbackArray = data.productRequests;
  console.log(data.productRequests);

  //call outer getSuggestions function
  getSuggestions(data.productRequests);
}

// module invoked on load
window.addEventListener("load", fetchSuggestions);
