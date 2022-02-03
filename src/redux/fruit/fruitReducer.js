import { BUY_APLLE, BUY_ORANGE } from "./fruitType";

const fruitState = {
    apple: 10,
    orange: 15
}

const fruitReducer = (state = fruitState , action)=>{
    switch (action.type) {
        case BUY_APLLE:
            return {...state , apple: state.apple - action.payload}
        case BUY_ORANGE:
            return {...state , orange: state.orange - action.payload}
    
        default:
            return state
    }
}

export default fruitReducer;