import { feedbackDetails } from "../shared/shared-functions";
import { initialValues } from "./getSuggestions";

export function roadmapLists() {
  const roadmapFeedbackWrapper = document.querySelector(
    ".feedback--roadmap .feedback-items-wrapper"
  );
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
      visible: false,
    },
    {
      name: "live",
      visible: false,
    },
  ];

  let shown = [];
  const all = initialValues.feedbackArray;
  
  const filterInMap = (toFilter) => toFilter.map((el) => {
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

  const columnsLists = columns.map((el, i) => {
      shown.push(all.filter(f => f.status == el.name));
      return `
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
            ${filterInMap(shown[i]).join('')}
          </div>
        </div>
      </div>
      `
    })

    roadmapColumnsWrapper.innerHTML = columnsLists.join('');

  // item recognition
  const feedbackItems = document.querySelectorAll(".feedback-item");
  feedbackItems &&
    feedbackItems.forEach((element) => {
      element.addEventListener("click", feedbackDetails);
  });
}
