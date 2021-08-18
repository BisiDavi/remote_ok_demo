import { combineReducers } from "redux";
import JobReducer from "./jobReducer";

const RootReducer = combineReducers({
  jobs: JobReducer,
});

export default RootReducer;
