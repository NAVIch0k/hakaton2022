import { reducer as formReducer } from 'redux-form'
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import Send_form_reducer from './Send_form_reducer';

let reducer=combineReducers({
    form_page:Send_form_reducer,
    form:formReducer
})

let store=createStore(reducer,applyMiddleware(thunkMiddleware))
export default store