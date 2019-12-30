import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import loadReducer from './loadReducer'
import RecipeReducer from './RecipeReducer'


const rootReducer = combineReducers({

    isLoading: loadReducer,
    recipe: RecipeReducer,
    error: errorReducer,

})

export default rootReducer