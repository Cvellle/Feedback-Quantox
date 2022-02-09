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

  //   fetch("/data/data.json")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const list = json.productRequests.map((el) => {
  //         return `<div class="feedback-item">
  //             <div class="feedback-item__left">
  //               <span class="arrow"></span>
  //               <div class="count">112</div>
  //             </div>
  //             <div class="feedback-item__center">
  //               <h4 class="title">${el.title}</h4>
  //               <p>
  //                 You can invite up to 2 additional users on the Free plan. There is
  //                 no limit on team members for the Premium plan.
  //               </p>
  //               <div class="tag">Enchan</div>
  //             </div>
  //             <div class="feedback-item__right">
  //               <span class="comment"></span>
  //               <div class="count">2</div>
  //             </div>
  //           </div>`;
  //       });

  //       feedbackWrapper.innerHTML = list.join("");
  //       console.log(list);
  //       console.log(feedbackWrapper);

  // const filtered = json.filter((quote) => quote.userId>9);

  // list.innerHTML = filtered.map((curr,i) => {

  //   return `<li><p>${i+1}</p><p>Title: ${curr.title}<br>User id: ${curr.userId}</p></li>`;
  //   }
  // ).join('');
  // });
}

// module invoked on load
window.addEventListener("load", getSuggestions);
