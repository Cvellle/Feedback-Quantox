import { getSuggestions, initialValues } from "./getSuggestions";

const feedbackItem = document.querySelectorAll(".feedback-item");

function editFeedback() {
  const sidebarStatusDisplay = document.querySelector(
    ".sidebar__status-display"
  );
//   getSuggestions(initialValues.feedbackArray, );
}

// module invoked on load
window.addEventListener("load", editFeedback);
