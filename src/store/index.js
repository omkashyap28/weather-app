import { applyMiddleware, compose, createStore } from "redux";
import { weatherReducer } from "./reducers/weatherReducer";
import { thunk } from "redux-thunk";

export const store = createStore(
  weatherReducer,
  compose(applyMiddleware(thunk))
);
