// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
// import rootReducer from "./root-reducer";

const middlewares = [reduxThunk];

