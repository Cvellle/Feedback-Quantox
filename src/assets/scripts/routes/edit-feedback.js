
import { editFeedbackTemplate } from "../templates/edit-feedback.template";
import { router } from "./router";
import "../shared/helpers";
import { goBack, setPreviousRoute } from "../shared/shared-functions";
import { initialValues } from "../modules/getSuggestions";

router.on("/item/edit/:id", function (match) {
  document.body.innerHTML = editFeedbackTemplate;

  const nameInput = document.querySelector(".edit .title input");
  const statusSelect = document.querySelector(".edit .select--2");
  const categorySelect = document.querySelector(".edit .select--1");
  const details = document.querySelector(".edit .details textarea");
  const submitBtn =  document.querySelector(".edit .submit");
  submitBtn.classList.add("save");
  const saveBtn = document.querySelector(".edit .save");
  const deleteBtn = document.querySelector(".edit .delete");

  // Current id
  let currentId = match.data.id;
  let currentObject = initialValues.feedbackArray[currentId - 1];

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

    currentObject.title = submitBody.title;
    currentObject.category = submitBody.category;
    currentObject.status = submitBody.status;
    currentObject.description = submitBody.description;

    goBack()
  };

  const deleteFunction = () => {
    initialValues.feedbackArray = initialValues.feedbackArray.filter(el => el.id != currentId)
    router.navigate('/')
    initialValues.previousRoute = [];
  }

  saveBtn.addEventListener("click", saveFunction);
  deleteBtn.addEventListener("click", deleteFunction);
  saveBtn.innerHTML = 'Save';

  nameInput.value = currentObject.title;
  details.value = currentObject.description;
  statusSelect.value = currentObject.status;
  categorySelect.value = currentObject.category;

  setPreviousRoute(match.url);

  const back = document.querySelector(".edit .back");
  const cancel = document.querySelector(".edit .cancel");

  back.addEventListener("click", () => goBack());
  cancel.addEventListener("click", () => goBack());
});
