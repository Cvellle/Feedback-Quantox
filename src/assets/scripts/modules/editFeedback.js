import { getSuggestions, initialValues } from "./getSuggestions";

function editFeedback() {
    const feedbackWrapper = document.querySelector(".feedback-items-wraper");
    const sidebarStatusDisplay = document.querySelector(".sidebar__status-display");

    getSuggestions(initialValues.feedbackArray)
  }
  
  // module invoked on load
  window.addEventListener("click", editFeedback);
  