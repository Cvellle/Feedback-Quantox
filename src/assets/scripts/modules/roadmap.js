import { tabletMin } from "../shared/constants";
import { addItemDetailsListener, feedbackDetails, filterStatus } from "../shared/shared-functions";
import { initialValues } from "./getSuggestions";

export function roadmapLists() {
  const roadmapFeedbackWrapper = document.querySelector(
    ".feedback--roadmap .feedback-items-wrapper"
  );
  const feedbackItems = document.querySelectorAll(".feedback-item");
  const roadmapColumnsWrapper = document.querySelector(
    ".roadmap .roadmap__columns"
  );
  

  const columns = [
    {
      name: "planned",
      visible: true,
    },
    {
      name: "in-progress",
      visible:  tabletMin,
    },
    {
      name: "live",
      visible:  tabletMin,
    },
  ];

  let shown = [];
  const all = initialValues.feedbackArray;

  const filterInMap = (toFilter) =>
    toFilter.map((el) => {
      return `<div class="feedback-item" id="${el.id}">
                <div class="feedback-item__left">
                  <span class="arrow"></span>
                  <div class="count">${el.upvotes}</div>
                </div>
                <div class="feedback-item__center">
                  <h4 class="title">${el.title}</h4>
                  <p>
                    ${el.description}
                  </p>
                  <div class="tag">
                    <span>${el.category}</span>
                  </div>
                </div>
                <div class="feedback-item__right">
                  <span class="comment"></span>
                  <div class="count">
                    ${el.comments ? el.comments.length : 0}
                  </div>
                </div>
            </div>`;
    });

  const columnsLists = () => {
    let mapped = columns.map((el, i, self) => {
      
      shown.push(all.filter((f) => f.status == el.name));

      const visibleColumn = el.visible
        ? `
      <div class="roadmap__column roadmap__column--${el.name}">
        <bold>
          ${el.name}
          <span>(<span class="count">${shown[i].length}</span>)</span>
        </bold>
        <div>In search</div>
        <div>
          <div class="item">
            <div><span></span></div>
          </div>
        </div>
        <div class="feedback feedback--roadmap">
          <div class="feedback-items-wrapper">
            ${el.visible && filterInMap(shown[i]).join("")}
          </div>
        </div>
      </div>
    `
        : null;

      const mobileHeader = self.map((buttonEl, buttonIndex) => {
        let allColumns = filterStatus(true);
        return `
        <div class="btn-name">
          <bold>
            <span>${buttonEl.name}</span>
            <span>(<span class="count">${allColumns[buttonIndex].length}</span>)</span>
          </bold>
        </div> `;
      });

      return el.visible
        ? `
      <div class="roadmap-mobile-header">
        ${mobileHeader.join("")}  
      </div>
    ` + visibleColumn
        : null;
    });

    return mapped.join("");
  };

  const switchColumns = (e) => {
    let current = columns.find(
      (el) =>
        el.name == e.currentTarget.firstElementChild.firstElementChild.innerHTML
    );
    columns.forEach((el) => (el.visible = false));
    current.visible = true;
    roadmapColumnsWrapper.innerHTML = columnsLists();
    const columnSwitchBtns = document.querySelectorAll(".btn-name");

    columnSwitchBtns.forEach((element) => {
      element.addEventListener("click", switchColumns);
    });
    e.currentTarget.classList.add("btn-name--active");
    // add event listeners after repiant
    addItemDetailsListener()
  };

  roadmapColumnsWrapper.innerHTML = columnsLists();

  // Mobile switch columns
  const columnSwitchBtns = document.querySelectorAll(".btn-name");

  columnSwitchBtns &&
    columnSwitchBtns.forEach((element) => {
      element.addEventListener("click", switchColumns);
    });
}
