import { combineReducers } from "redux";
import JobReducer from "./jobReducer";
import PostJobReducer from "./postJobReducer";
import { SubscriberReducer } from "./subscriberReducer";
import { ThemeReducer } from "./ThemeReducer";

const RootReducer = combineReducers({
  jobs: JobReducer,
  postJob: PostJobReducer,
  theme: ThemeReducer,
  subscriber: SubscriberReducer,
});

export default RootReducer;
