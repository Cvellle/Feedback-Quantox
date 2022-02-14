import { getSuggestions, initialValues } from "../modules/getSuggestions";
import { roadmapLists } from "../modules/roadmap";
import { roadmapTemplate } from "../templates/roadmap.template";
import { router } from "./router";

router.on("/roadmap", function () {
  document.body.innerHTML = roadmapTemplate;

  const goBack = () => {
    router.navigate("/");
    getSuggestions(initialValues.feedbackArray);
  };

  const back = document.querySelector(".roadmap .back");
  back.addEventListener("click", goBack);
  roadmapLists();
});
