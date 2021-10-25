import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./reducers/appReducer";

const middleware = [thunk];

export const store = createStore(appReducer, applyMiddleware(...middleware));
