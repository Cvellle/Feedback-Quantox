import Navigo from "navigo";
const router = new Navigo("/");

router.on("/new-feedback", function () {
  document.body.innerHTML = `<section>
    Go Back
    Edit Feedback
  
    <!-- Add upvotes --> 
    <!-- Add title -->
    <!-- Add description -->
    <!-- Add category -->
    <!-- Add comments -->
  
    <!-- Add number of comments + subcomments --> Comments
  
    <!-- Add name -->
    <!-- Add username -->
    <!-- Add comment -->
    Reply
  
    Add Comment
    Type your comment here
    250 Characters left
  
    Post Comment
  </section>`;
});
