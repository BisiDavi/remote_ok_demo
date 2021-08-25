import { combineReducers } from "redux";
import JobReducer from "./jobReducer";
import PostJobReducer from "./postJobReducer";
import { ThemeReducer } from "./ThemeReducer";

const RootReducer = combineReducers({
  jobs: JobReducer,
  postJob: PostJobReducer,
  theme: ThemeReducer,
});

export default RootReducer;
