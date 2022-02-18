import { initialValues } from "../modules/getSuggestions";
import { goBack, setPreviousRoute } from "../shared/shared-functions";
import { editFeedbackTemplate } from "../templates/edit-feedback.template";
import { router } from "./router";

router.on("/new-feedback", function (match) {
  document.body.innerHTML = editFeedbackTemplate;

  const nameInput = document.querySelector(".edit .title input");
  const statusSelect = document.querySelector(".edit .status select");
  const categorySelect = document.querySelector(".edit .category select option");
  const details = document.querySelector(".edit .details textarea");
  const addNewBtn = document.querySelector(".edit .submit");
  addNewBtn.classList.add("add");
  const addBtn = document.querySelector(".edit .add");

  const addNewFunction = () => {
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
    goBack()
  };

  addBtn.addEventListener("click", addNewFunction);

  document.querySelector(".edit .status").style.display = "none";

  // set current route as back destination, and imported back function
  setPreviousRoute(match.url);
  const back = document.querySelector(".edit .back");
  const cancel = document.querySelector(".edit .cancel");

  back.addEventListener("click", goBack);
  cancel.addEventListener("click", goBack);
});
