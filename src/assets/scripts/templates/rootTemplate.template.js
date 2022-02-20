export const rootTemplate = `
<section class="sidebar">
<div class="sidebar__titles">
  <div>
    <h1>Frontend Mentor</h1>
    <h3>Feedback Board</h3>
  </div>
  <button class="toggleButton">
    <div></div>
    <div></div>
    <div></div>
  </button>
</div>
<div class="sidebar__menu">
  <div class="sidebar__categories">
    <button class="category">All</button>
    <button class="category ui">UI</button>
    <button class="category ux"y>UX</button>
    <button class="category enhancement">Enhancement</button>
    <button class="category bug">Bug</button>
    <button class="category feature">Feature</button>
  </div>
  <div class="sidebar__status-wrapper">
    <span>Roadmap</span>
    <a href="/roadmap" data-navigo>View</a>
    <div class="sidebar__status-display">
      <div class="sidebar__status sidebar__status--planned">
        <span class="circle"></span>Planned <span class="count"></span>
      </div>
      <div class="sidebar__status sidebar__status--in-progress">
        <span class="circle"></span>In-Progress
        <span class="count"></span>
      </div>
      <div class="sidebar__status sidebar__status--live">
        <span class="circle"></span>Live <span class="count"></span>
      </div>
    </div>
  </div>
</div>
</section>
<section class="feedback feedback--root">
<div class="feedback__controls">
  <div class="feedback__counter">
    <span class="bulb"></span>
    <span class="count" filterStatus</span>
      <h3>Suggestions</h3>
  </div>
  <div class="feedback__sort">
    <div class="text">
      <span class="sort-by">Sort by:</span>
      <span class="current"></span>
      <span class="arrow"></span>
    </div>
    <div class="dropdown">
      <div class="dropdown-item" filter-by="upvotes" data-direction="reverse">
        <span class="filter-by">Most Upvotes</span>
        <span class="checked"></span>
      </div>
      <div class="dropdown-item" filter-by="upvotes" data-direction="normal">
        <span class="filter-by">Least Upvotes</span>
        <span class="checked"></span>
      </div>
      <div class="dropdown-item" filter-by="comments" data-direction="reverse">
        <span class="filter-by">Most Comments</span>
        <span class="checked"></span>
      </div>
      <div class="dropdown-item" filter-by="comments" data-direction="normal">
        <span class="filter-by">Least Comments</span>
        <span class="checked"></span>
      </div>
    </div>
  </div>
  <a class="add" href="/new-feedback" data-navigo>+ Add Feedback</a>
</div>
<div class="feedback-items-wrapper">
  <div class="feedback-empty">
    <figure>
      <picture>
        <source />
        <img src="" alt="no-results" />
      </picture>
    </figure>
    <div>>There is no feedback yet.</div>
    <p>
      Got a suggestion? Found a bug that needs to be squashed? We love
      hearing about new ideas to improve our app.
    </p>
    <butotn>Add Feedback</butotn>
  </div>
</div>
</section>
`;
