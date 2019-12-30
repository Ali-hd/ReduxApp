import {takeEvery, put, call} from 'redux-saga/effects'
import fetchData from '../api/getRecipes'
import {getRecipe, setError} from '../actions'

function* handleRecipe(action){
    try{
        const state = action.state
        const recipedata = yield call(fetchData,state)
        // const userToken = yield call(fetchtoken)
        console.log(recipedata)
        // console.lgog(userToken)
        yield put(getRecipe(recipedata))
    }catch(error){
        //dispatch error
        console.log('err saga')
        yield put(setError(error.toString()))
    }
    
}

export default function* fetchRecipeData(){
    yield takeEvery("RECIPE_LOAD",handleRecipe)
}