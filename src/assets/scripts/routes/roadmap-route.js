import { roadmapLists } from "../modules/roadmap";
import { goBack, setPreviousRoute } from "../shared/shared-functions";
import { roadmapTemplate } from "../templates/roadmap.template";
import { router } from "./router";

router.on("/roadmap", function (match) {
    document.body.innerHTML = roadmapTemplate;
    roadmapLists();

   // set current route as back destination, and imported back function
   setPreviousRoute(match.url);
   const back = document.querySelector(".roadmap .back");
   back.addEventListener("click", goBack);
});
