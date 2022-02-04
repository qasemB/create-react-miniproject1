import { RECEIVE_USER_ERROR, RECEIVE_USER_RESPONSE, SEND_USER_REQUEST } from "./userTypes"

const userInit = {
    loading: false,
    data:[],
    error: ''
}

const userReducer = (state = userInit , action)=>{
    switch (action.type) {
        case SEND_USER_REQUEST:
            return {...state , loading: true}
        case RECEIVE_USER_RESPONSE:
            return {loading: false , data: action.payload , error: ''}
        case RECEIVE_USER_ERROR:
            return {loading: false , data: [] , error: action.payload}
        default:
            return state;
    }
}

export default userReducer