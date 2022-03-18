import { newFeedbackModule } from "../modules/new-feedback-module";
import { editFeedbackTemplate } from "../templates/edit-feedback.template";
import { router } from "./router";

router.on("/new-feedback", function (match) {
  document.body.innerHTML = editFeedbackTemplate;
  
  newFeedbackModule(match);
});
