import { combineReducers, createStore } from "redux";
import { resultsReducer } from "./SearchResultAppState";

const reducers = combineReducers({ resultsReducer: resultsReducer });
const store = createStore(reducers);

export default store;