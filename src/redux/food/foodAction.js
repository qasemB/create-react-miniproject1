import { BUY_SANDWICH } from "./foodType"

export const buySandwich = (count)=>{
    return {
        type: BUY_SANDWICH,
        payload: count
    }
}