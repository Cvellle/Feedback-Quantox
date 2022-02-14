
import { getSuggestions, initialValues } from "../modules/getSuggestions";
import { editFeedbackTemplate } from "../templates/edit-feedback.template";
import { router } from "./router";

router.on("/new-feedback", function () {
    document.body.innerHTML = editFeedbackTemplate; 

    const goBack = () => {
        router.navigate("/");
        getSuggestions(initialValues.feedbackArray);
      };
    
      const back = document.querySelector(".edit .back");
      back.addEventListener("click", goBack);
})