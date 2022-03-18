import { addItemDetailsListener, feedbackDetails, goBack, setPreviousRoute } from "../shared/shared-functions";
import { roadmapLists } from "./roadmap";

export const roadmapModule = (match) => {
  roadmapLists();

  // set current route as return destination, and imported back function
  const back = document.querySelector(".roadmap .back");
  back.addEventListener("click", goBack);
  setPreviousRoute(match.url);

  // item recognition
  addItemDetailsListener()
};
