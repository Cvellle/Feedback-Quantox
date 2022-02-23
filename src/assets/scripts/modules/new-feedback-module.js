import { getLS, updateStorage } from "../modules/getSuggestions";
import { goBack, setPreviousRoute } from "../shared/shared-functions";

export const newFeedbackModule = (match) => {
  const nameInput = document.querySelector(".edit .title input");
  const statusSelect = document.querySelector(".edit .status select");
  const categorySelect = document.querySelector(
    ".edit .category select option"
  );
  const details = document.querySelector(".edit .details textarea");
  const addNewBtn = document.querySelector(".edit .submit");
  const deleteBtn = document.querySelector(".edit .delete");

  // get main feedback array
  let feedbackArray = getLS('feedbackArray');

  addNewBtn.classList.add("add");
  const addBtn = document.querySelector(".edit .add");
  deleteBtn.style.display = "none";

  const addNewFunction = () => {
    let submitBody = {
      id: feedbackArray.length + 1,
      description: details.value,
      comments: [],
      upvotes: 0,
      title: nameInput.value,
      category: categorySelect.value,
      status: null,
    };

    feedbackArray = [...feedbackArray, submitBody];
    updateStorage('feedbackArray', feedbackArray);

    goBack();
  };

  addBtn.addEventListener("click", addNewFunction);
  document.querySelector(".edit .status").style.display = "none";

  // set current route as back destination, and imported back function
  setPreviousRoute(match.url);
  const back = document.querySelector(".edit .back");
  const cancel = document.querySelector(".edit .cancel");

  back.addEventListener("click", goBack);
  cancel.addEventListener("click", goBack);
};
