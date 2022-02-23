import { detailsModule } from "../modules/details-module";
import { getLS } from "../modules/getSuggestions";
import { detailsTemplate } from "../templates/details.template";
import { router } from "./router";

router.on("/item/:id", function (match) {
  document.body.style = "background: #f2f2f2";
  let currentId = match.data.id;
  let current = getLS('feedbackArray').filter(
    (el) => el.id == currentId
  )[0];


  document.body.innerHTML = detailsTemplate(current);

  // Functions
  detailsModule(match, current);
});
