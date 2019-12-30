import {all} from 'redux-saga/effects'
import RecipeSaga from './RecipeSaga'
//watcher Saga
export default function* rootSaga(){
    yield all([
        RecipeSaga()
    ])
    // yield takeEvery(USER.LOAD, handleUserLoad)
}