import { getSuggestions, initialValues } from "../modules/getSuggestions";
import { filterStatus, sortItems } from "../shared/shared-functions";
import { rootTemplate } from "../templates/rootTemplate";
import { router } from "./router";

document.body.innerHTML = rootTemplate;

router.on("/", function () {
  document.body.innerHTML = rootTemplate;
  filterStatus();

  // sort
  const sortToggleTarget = document.querySelector(".feedback__sort .text");
  const dropdown = document.querySelector(".feedback__sort .dropdown");
  const sortButtons = document.querySelectorAll(".dropdown-item");

  sortButtons &&
    sortButtons.forEach((element) => {
      element.addEventListener("click", sortItems);
    });

  sortToggleTarget &&
    sortToggleTarget.addEventListener("click", (e) => {
      dropdown.classList.toggle("dropdown--visible");
    });
});

window.onload = function (event) {
  if (event) {
    router.navigate("/");
    getSuggestions(initialValues.feedbackArray);
  }
};
