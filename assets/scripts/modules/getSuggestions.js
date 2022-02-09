function getSuggestions() {
  const feedbackWrapper = document.querySelector(".feedback-items-wraper");

  async function fetchSuggestions() {
    const response = await fetch("/data/data.json");
    const json = await response.json();

    const list = json.productRequests.map((el) => {
      return `<div class="feedback-item">
            <div class="feedback-item__left">
              <span class="arrow"></span>
              <div class="count">${el.upvotes}</div>
            </div>
            <div class="feedback-item__center">
              <h4 class="title">${el.title}</h4>
              <p>
                ${el.description}
              </p>
              <div class="tag">${el.category}</div>
            </div>
            <div class="feedback-item__right">
              <span class="comment"></span>
              <div class="count">${
                el.comments && el.comments.length
              }</div>
            </div>
          </div>`;
    });

    feedbackWrapper.innerHTML = list.join("");
  }

  fetchSuggestions();
}

// module invoked on load
window.addEventListener("load", getSuggestions);
