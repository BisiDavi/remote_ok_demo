import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from "@utils/storage";


import RootReducer from "@stores/rootReducer";

const middleware = [thunk];

const config = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(config, RootReducer);

const store = createStore(
  persistedReducer,
  process.env.NEXT_PUBLIC_ENVIRONMENT === "dev"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)
);

export const persistor = persistStore(store);

export default store;
