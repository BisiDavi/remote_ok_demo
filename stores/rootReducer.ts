import { combineReducers } from "redux";
import JobReducer from "./jobReducer";
import PostJobReducer from "./postJobReducer";

const RootReducer = combineReducers({
  jobs: JobReducer,
  postJob: PostJobReducer,
});

export default RootReducer;
