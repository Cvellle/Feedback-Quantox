import { getSuggestions, initialValues } from "../modules/getSuggestions";
import { router } from "../routes/router";

export const setPreviousRoute = (currentPath) => {
    initialValues.previousRoute = currentPath ? currentPath : [...initialValues.previousRoute, location.pathname.split('/').pop()];
};

export const goBack = (s) => {
    let previousRoute =  initialValues.previousRoute.length > 0 ? [...initialValues.previousRoute].pop() : "/";
    console.log(previousRoute);
    router.navigate(previousRoute);
    getSuggestions(initialValues.feedbackArray);
    initialValues.previousRoute = initialValues.previousRoute.slice(previousRoute.length - 1);
};

export function feedbackDetails(e) {
    router.navigate("/item/" + e.currentTarget.id);
    getSuggestions(initialValues.feedbackArray, e.currentTarget.id);
}

// Filter by status
export const filterStatus = () => {
    // statuses count
    const statuses =  ['planned', 'in-progress', 'live'];
    statuses.forEach(
       el => {
         let filtered = initialValues.feedbackArray.filter((f) => {
           return f['status'] == el;
         });
         document.querySelector('.sidebar__status--' + el + ' .count') && (document.querySelector('.sidebar__status--' + el + ' .count').innerHTML = filtered.length)
       }
     ) 
  };

// Sort
export const sortItems = (e) => {
    const selectSort = document.querySelector(".feedback__sort .current");
    const checkMarks = document.querySelectorAll(".feedback__sort .checked");
    let current =  e.currentTarget;
    let filterBy = e.currentTarget.getAttribute("filter-by");
    let direction = e.currentTarget.getAttribute("data-direction");
    
    selectSort.innerHTML = e.currentTarget.firstElementChild.innerHTML;
    checkMarks.forEach(el => el.style.display = "none");
    current.lastElementChild.style.display = "block";

    let sorted = initialValues.feedbackArray.sort((a, b) => {
        // check if comments object exists
        let aCheck = a[filterBy] ? a[filterBy].length : 0;
        let bCheck = b[filterBy] ? b[filterBy].length : 0;
        // check if the value is an obect or a number - comments length or upvotes
        let aValue = typeof a[filterBy] == 'object' ? aCheck : a[filterBy];
        let bValue = typeof a[filterBy] == 'object' ? bCheck : b[filterBy];

        if (direction == "normal") {
            return aValue > bValue ? 1 : -1
        } else {
            return aValue > bValue ? -1 : 1
        }
    })

    getSuggestions(sorted);
}