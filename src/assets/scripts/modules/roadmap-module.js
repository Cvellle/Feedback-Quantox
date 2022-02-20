import { goBack, setPreviousRoute } from "../shared/shared-functions";
import { roadmapLists } from "./roadmap";

export const roadmapModule = (match) => {
  roadmapLists();

  // set current route as back destination, and imported back function
  setPreviousRoute(match.url);
  const back = document.querySelector(".roadmap .back");
  back.addEventListener("click", goBack);
};
