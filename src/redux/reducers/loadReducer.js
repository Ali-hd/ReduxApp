const loadReducer = (state = false, action) => {
    switch (action.type) {
        case "RECIPE_LOAD":
            return true;
        case "RECIPE_LOAD_SUCCESS":
            return false;
        case "RECIPE_LOAD_FAIL":
            return false;
        default:
            return state;
    }
}


export default loadReducer