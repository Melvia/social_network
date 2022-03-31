import { createStore, applyMiddleware } from "redux";
import { initialState } from "./initialState";
import rootReducer from "./redusers/rootReducer";
import thunk from "redux-thunk";

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
