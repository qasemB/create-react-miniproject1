import { combineReducers } from "redux";
import foodReducer from "./food/foodReducer";
import fruitReducer from "./fruit/fruitReducer";

const rootReducer = combineReducers({
    fruit: fruitReducer,
    food: foodReducer
})

export default rootReducer