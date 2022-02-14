export const editFeedbackTemplate = `
<section class="edit">
    <div class="edit__controls">
        <div class="back">
        <span class="arrow"></span>
        <span class="text">Go back</span>
    </div>
</div>
    <div class="edit__wrapper">
    <div>
        <h3>Feedback Title</h3>
        <div>Add a short, descriptive headline</div>
        <input class="select select--1"></input>
    </div>
    <div>
        <h3>Category</h3>
        <div>Choose a category for your feedback</div>
        <div class="select select--2">
        <div>All</div>
        <div>UX</div>
        <div>UI</div>
        <div>Enhancement</div>
        <div>Feature</div>
        <div>Bug</div>
        </div>
    </div>
    <div>
        <h3>Update Status</h3>
        <div>Change feedback state</div>
        <div class="select select--3">
        <div>Suggestion</div>
        <div>Planned</div>
        <div>In-Progress</div>
        <div>Live</div>
        </div>
    </div>
    <div>
        <h3>Feedback detail</h3>
        <div>
        Include any specific comments on what should be improved, added,
        etc.
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div class="btns">
        <button class="delete">Delete</button>
        <button class="cancel">Cancel</button>
        <button class="save">Add feedback</button>
    </div>
    </div>
</section>`;
