import { createStore  } from "redux";
import addReducer from "./reducers/addReducer";


export default createStore(addReducer)