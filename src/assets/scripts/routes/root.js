import { getSuggestions, initialValues } from "../modules/getSuggestions";
import { filterStatus, sortItems } from "../shared/shared-functions";
import { rootTemplate } from "../templates/rootTemplate";
import { router } from "./router";

document.body.innerHTML = rootTemplate;

router.on("/", function () {
  document.body.innerHTML = rootTemplate;

  getSuggestions(initialValues.feedbackArray);
  filterStatus();

  // sort
  const sortToggleTarget = document.querySelector(".feedback__sort");
  const dropdown = document.querySelector(".feedback__sort .dropdown");
  const sortButtons = document.querySelectorAll(".dropdown-item");
  //mobile menu toggle
  const menuIcon = document.querySelector(".toggleButton");
  const navigation = document.querySelector(".sidebar__menu");

  sortButtons &&
    sortButtons.forEach((element) => {
      element.addEventListener("click", sortItems);
    });

  sortToggleTarget &&
    sortToggleTarget.addEventListener("mouseover", (e) => {
      dropdown.classList.add("dropdown--visible");
    });

    sortToggleTarget &&
    sortToggleTarget.addEventListener("mouseleave", (e) => {
      dropdown.classList.remove("dropdown--visible");
    });


  
    const toggleNav = () => {
      navigation.classList.toggle("sidebar__menu--visible");
    };
  
    menuIcon.addEventListener("click", toggleNav);
});

window.onload = function (event) {
  if (event) {
    router.navigate("/");
  }
};
