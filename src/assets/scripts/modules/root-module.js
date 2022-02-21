import { filterStatus, sortItems } from "../shared/shared-functions";
import { initialValues } from "./getSuggestions";

export const rootModule = () => {
  // QUERIES
  // sort
  const sortToggleTarget = document.querySelector(".feedback__sort");
  const dropdown = document.querySelector(".feedback__sort .dropdown");
  const sortButtons = document.querySelectorAll(".dropdown-item");
  const arrow = document.querySelector(".feedback__controls .arrow");
  //mobile menu toggle
  const menuIcon = document.querySelector(".toggleButton");
  const navigation = document.querySelector(".sidebar__menu");
  //upvotes
  const upvotes = document.querySelectorAll(".upvotes");

  // FUNCTIONS
  filterStatus();

  const toggleNav = () => {
    navigation.classList.toggle("sidebar__menu--visible");
  };

  const upvotesAdd = (e) => {
    let current = e.currentTarget;
    let spanCounter = current.lastElementChild;
    let currentHiddenInput = spanCounter.previousElementSibling;

    if (currentHiddenInput.value != initialValues.currentUser.name) {
      e.currentTarget.lastElementChild.innerHTML =
        +e.currentTarget.lastElementChild.innerHTML + 1;
      currentHiddenInput.value = initialValues.currentUser.name;
      e.currentTarget.classList.add("upvotes--highlighted");
    } else {
      e.currentTarget.lastElementChild.innerHTML =
        +e.currentTarget.lastElementChild.innerHTML - 1;
      currentHiddenInput.value = "";
      e.currentTarget.classList.remove("upvotes--highlighted");
    }
  };

  // ADD EVENT LISTENERS
  sortButtons &&
    sortButtons.forEach((element) => {
      element.addEventListener("click", sortItems);
    });

  sortToggleTarget &&
    sortToggleTarget.addEventListener("mouseover", (e) => {
      dropdown.classList.add("dropdown--visible");
      arrow.classList.add("arrow--rotated");
    });

  sortToggleTarget &&
    sortToggleTarget.addEventListener("mouseleave", (e) => {
      dropdown.classList.remove("dropdown--visible");
      arrow.classList.remove("arrow--rotated");
    });

  menuIcon.addEventListener("click", toggleNav);

  upvotes &&
    upvotes.forEach((element) => {
      element.addEventListener("click", upvotesAdd);
    });
};
