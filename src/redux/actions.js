const loadRecipe = (state) =>({
    type: 'RECIPE_LOAD',
    state
})

const getRecipe = recipe => ({
    type: 'RECIPE_LOAD_SUCCESS',
    recipe,
});

const setError = error => ({
    type: 'RECIPE_LOAD_FAIL',
    error,
});

export {
    loadRecipe,
    getRecipe,
    setError
}