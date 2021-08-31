import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import RootReducer from "@stores/rootReducer";

const middleware = [thunk];

const store = createStore(
  RootReducer,
  process.env.NEXT_PUBLIC_ENVIRONMENT === "dev"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)
);

export default store;
