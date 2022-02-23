import "../shared/helpers";
import { goBack, setPreviousRoute } from "../shared/shared-functions";
import { getLS, initialValues, updateStorage } from "../modules/getSuggestions";
import { router } from "../routes/router";

export const editFeedbackModule = (match) => {
  // Queries
  const nameInput = document.querySelector(".edit .title input");
  const categorySelect = document.querySelector(".edit .select--1");
  const statusSelect = document.querySelector(".edit .select--2");
  const details = document.querySelector(".edit .details textarea");
  const submitBtn = document.querySelector(".edit .submit");
  submitBtn.classList.add("save");
  const saveBtn = document.querySelector(".edit .save");
  const deleteBtn = document.querySelector(".edit .delete");

  // Main array import
  let feedbackArray = getLS('feedbackArray');
  // Current id
  let currentId = match.data.id;
  var currentObject = feedbackArray[currentId - 1];

  const saveFunction = () => {
    let submitBody = {
      id: currentId,
      description: details.value,
      comments: currentObject.comments,
      upvotes: currentObject.upvotes,
      title: nameInput.value,
      status: statusSelect.value.toLowerCase(),
      category: categorySelect.value.toLowerCase(),
    };

    // Change feedbackArray with copied values - spread previous slice,
    // add current object, spread slice after it
    feedbackArray = [
      ...feedbackArray.slice(0, currentId - 1),
      {
        ...feedbackArray[currentId - 1],
        title: submitBody.title,
        category: submitBody.category,
        status: submitBody.status,
        description: submitBody.description,
      },
      ...feedbackArray.slice(
        currentId,
        feedbackArray.length
      ),
    ];

    updateStorage('feedbackArray', feedbackArray);
    goBack(currentId);
  };

  const deleteFunction = () => {
    initialValues.feedbackArray = initialValues.feedbackArray.filter(
      (el) => el.id != currentId
    );
    router.navigate("/");
    initialValues.previousRoute = [];
  };

  saveBtn.addEventListener("click", saveFunction);
  deleteBtn.addEventListener("click", deleteFunction);
  saveBtn.innerHTML = "Save";
  // Set initial values (current values)
  nameInput.value = currentObject.title;
  details.value = currentObject.description;
  statusSelect.value = currentObject.status;
  categorySelect.value = currentObject.category;

  const back = document.querySelector(".edit .back");
  const cancel = document.querySelector(".edit .cancel");
  // Add listeners
  back.addEventListener("click", () => goBack(currentId));
  cancel.addEventListener("click", () => goBack(currentId));
};
