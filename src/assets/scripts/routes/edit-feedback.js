
import { editFeedbackTemplate } from "../templates/edit-feedback.template";
import { router } from "./router";
import "../shared/helpers";
import { goBack, setPreviousRoute } from "../shared/shared-functions";
import { initialValues } from "../modules/getSuggestions";

router.on("/item/edit/:id", function (match) {
  document.body.innerHTML = editFeedbackTemplate;

  let currentId = match.data.id;
  let current = initialValues.feedbackArray.filter(
    (el) => el.id == currentId
  )[0];


  // set current route as back destination, and imported back function
  let previousRoute = "item" + "/" + match.data["id"];
  setPreviousRoute(previousRoute);

  const back = document.querySelector(".edit .back");
  const cancel = document.querySelector(".edit .cancel");

  back.addEventListener("click", () => router.navigate(previousRoute));
  cancel.addEventListener("click", () => router.navigate(previousRoute));
});
