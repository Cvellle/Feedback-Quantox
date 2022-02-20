import "../shared/helpers";
import { goBack, setPreviousRoute } from "../shared/shared-functions";
import { initialValues } from "../modules/getSuggestions";
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

  // Current id
  let currentId = match.data.id;
  var currentObject = initialValues.feedbackArray[currentId - 1];

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
    initialValues.feedbackArray = [
      ...initialValues.feedbackArray.slice(0, currentId - 1),
      {
        ...initialValues.feedbackArray[currentId - 1],
        title: submitBody.title,
        category: submitBody.category,
        status: submitBody.status,
        description: submitBody.description,
      },
      ...initialValues.feedbackArray.slice(
        currentId,
        initialValues.feedbackArray.length
      ),
    ];

    goBack();
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

  nameInput.value = currentObject.title;
  details.value = currentObject.description;
  statusSelect.value = currentObject.status;
  categorySelect.value = currentObject.category;

  setPreviousRoute(match.url);

  const back = document.querySelector(".edit .back");
  const cancel = document.querySelector(".edit .cancel");

  back.addEventListener("click", () => goBack(currentId));
  cancel.addEventListener("click", () => goBack(currentId));
};
