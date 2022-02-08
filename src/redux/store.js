import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import weatherReducer from "./weather/weatherReducer";

const store = createStore(weatherReducer , composeWithDevTools(applyMiddleware(thunk)))

export default store;