import { createStore, applyMiddleware  } from "redux";
import allReducers from "./reducers/allReducers";
import thunk from 'redux-thunk'
export default createStore(allReducers, applyMiddleware(thunk))