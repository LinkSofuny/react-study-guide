import { combineReducers } from "redux";
import addReudcer from "./addReducer";
// 合并所有的reducers
export default combineReducers({
    add: addReudcer
})