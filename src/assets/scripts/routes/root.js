import {
  getLS,
  getSuggestions,
} from "../modules/getSuggestions";
import { rootModule } from "../modules/root-module";
import {
  addItemDetailsListener,
  setPreviousRoute,
} from "../shared/shared-functions";
import { rootTemplate } from "../templates/rootTemplate.template";
import { router } from "./router";

router.on("/", function (match) {
  // set the HTML
  document.body.innerHTML = rootTemplate(getLS("suggestions"));
  getSuggestions(getLS("suggestions"));
  rootModule();
  addItemDetailsListener();
  setPreviousRoute(match.url);
});

window.onload = function (event) {
  if (event) {
    router.navigate("/");
  }
};
