import { getSuggestions, initialValues } from "../modules/getSuggestions";
import { rootModule } from "../modules/root-module";
import { addItemDetailsListener, filterStatus } from "../shared/shared-functions";
import { rootTemplate } from "../templates/rootTemplate.template";
import { router } from "./router";

document.body.innerHTML = rootTemplate;

router.on("/", function () {
  // set the HTML
  document.body.innerHTML = rootTemplate;

  getSuggestions(initialValues.feedbackArray);
  rootModule();
  addItemDetailsListener();
});

window.onload = function (event) {
  if (event) {
    router.navigate("/");
  }
};
