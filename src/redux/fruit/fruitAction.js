import { BUY_APLLE, BUY_ORANGE } from "./fruitType"

export const buyApple = (count)=>{
    return {
        type: BUY_APLLE,
        payload: count

    }
}

export const buyOrange = (count)=>{
    return {
        type: BUY_ORANGE,
        payload: count

    }
}