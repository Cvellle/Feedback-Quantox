import { filterStatus, sortItems } from "../shared/shared-functions";

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

  // FUNCTIONS
  filterStatus();

  const toggleNav = (e) => {
    navigation.classList.toggle("sidebar__menu--visible");
    e.currentTarget.classList.toggle("toggleButton--visible");
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
};
