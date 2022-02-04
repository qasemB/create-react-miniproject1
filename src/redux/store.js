import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import userReducer from "./user/userReducer";

const store = createStore(userReducer , composeWithDevTools(applyMiddleware(logger , thunk)))

export default store