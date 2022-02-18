export const editFeedbackTemplate = `
<section class="edit">
    <div class="edit__controls">
        <div class="back">
        <span class="arrow"></span>
        <span class="text">Go back</span>
    </div>
</div>
    <div class="edit__wrapper">
    <div class="title">
        <h3>Feedback Title</h3>
        <div>Add a short, descriptive headline</div>
        <input class="name"></input>
    </div>
    <div class="category">
        <h3>Category</h3>
        <div>Choose a category for your feedback</div>
        <select class="custom-select select select--1">
            <option value="UX">UX</option>
            <option value="UI">UI</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Feature">Feature</option>
            <option value="Bug">Bug</option>
        </select>
    </div>
    <div class="status">
        <h3>Update Status</h3>
        <div>Change feedback state</div>
        <select class="custom-select select select--2">
            <option value="Suggestion">Suggestion</option>
            <option value="Planned">Planned</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Live">Live</option>
        </select>
    </div>
    <div class="details">
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
        <button class="submit">Add feedback</button>
    </div>
    </div>
</section>`;

 const firstOption = `<option value="" selected disabled hidden>Choose</option>`;