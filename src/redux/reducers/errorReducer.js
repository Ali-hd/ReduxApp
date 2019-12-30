const errorReducer = (state = null, action) => {
    switch (action.type) {
        case "RECIPE_LOAD_FAIL":
            return action.error;
        case "RECIPE_LOAD":
        case "RECIPE_LOAD_SUCCESS":
            return null;
        
        default:
            return state;
    }
};

export default errorReducer;