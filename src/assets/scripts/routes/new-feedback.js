
import { goBack, setPreviousRoute } from "../shared/shared-functions";
import { editFeedbackTemplate } from "../templates/edit-feedback.template";
import { router } from "./router";

router.on("/new-feedback", function () {
   document.body.innerHTML = editFeedbackTemplate; 

   // set current route as back destination, and imported back function
  setPreviousRoute();
  const back = document.querySelector(".edit .back");
  const cancel = document.querySelector(".edit .cancel");
  
  back.addEventListener("click", goBack);
  cancel.addEventListener("click", goBack);
})