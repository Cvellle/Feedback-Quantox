import { roadmapModule } from "../modules/roadmap-module";
import { roadmapTemplate } from "../templates/roadmap.template";
import { router } from "./router";

router.on("/roadmap", function (match) {
  document.body.innerHTML = roadmapTemplate;

  roadmapModule(match);
});
