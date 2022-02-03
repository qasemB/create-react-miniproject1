import { BUY_SANDWICH } from "./foodType"

const foodState = {
    sandwich: 20
}

const foodReducer = (state = foodState , action)=>{
    switch (action.type) {
        case BUY_SANDWICH:
            return {...state , sandwich: state.sandwich - action.payload}
    
        default:
            return state
    }
}

export default foodReducer;