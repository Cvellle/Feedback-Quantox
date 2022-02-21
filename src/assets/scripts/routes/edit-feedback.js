import { editFeedbackModule } from "../modules/edit-feedback-module";
import { setPreviousRoute } from "../shared/shared-functions";
import { editFeedbackTemplate } from "../templates/edit-feedback.template";
import { router } from "./router";

router.on("/item/edit/:id", function (match) {
  setPreviousRoute(match.url);
  // set html
  document.body.innerHTML = editFeedbackTemplate;
  // import module functions
  editFeedbackModule(match);
});
