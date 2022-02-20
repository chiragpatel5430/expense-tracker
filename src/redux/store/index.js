import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expences";

const reducer = combineReducers({
    expenses:expenseReducer 
})

const initialState = {
};

const store = createStore(reducer, initialState);

export default store