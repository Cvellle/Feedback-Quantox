import { initialValues } from "./getSuggestions";

function detailsModule() {
  const sidebarStatusDisplay = document.querySelector(
    ".sidebar__status-display"
  );

  const addComments = () => {
    let submitBody = {
      id: initialValues.feedbackArray.length + 1,
      description: details.value,
      comments: [],
      upvotes: 0,
      title: nameInput.value,
      category: categorySelect.value,
      status: null,
    };

    initialValues.feedbackArray = [...initialValues.feedbackArray, submitBody];
    goBack();
  };

    window.addEventListener("click", addComments);
}

// module invoked on load
window.addEventListener("load", detailsModule);
