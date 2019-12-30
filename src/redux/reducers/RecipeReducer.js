const initState = {
    idMeal:"",
    strMeal:"",
    quantity: 5,
}
// { ... state , ...action.user }
const RecipeReducer = (state = initState, action) =>{
    switch(action.type){
        case "RECIPE_LOAD_SUCCESS":
        return {...state, ...action.recipe}
            
            // return {
            //     ...state,
            //     quantity: state.quantity-1
            // }

    default:
        return state;
    }
}

export default RecipeReducer