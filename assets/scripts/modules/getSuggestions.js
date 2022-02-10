export const initialValues = {
  feedbackArray: null,
  currentUserL: null
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

 function fetchSuggestions() {
  alert('s')
  // const feedbackWrapper = document.querySelector(".feedback-items-wraper");
  // // fetch
  // const response = await fetch("/data/data.json");
  // console.log(response);
  // const json = await response.json();
  // // fill the object
  // initialValues.feedbackArray = json.productRequests;
  // //call outer getSuggestions function
  // getSuggestions(initialValues.feedbackArray);
}
// module invoked on load
window.addEventListener("load", fetchSuggestions);