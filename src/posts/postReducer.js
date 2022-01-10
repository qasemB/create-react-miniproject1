
export const init = {
    postData:{
        userId: "" ,
        id : "",
        title : "" ,
        body : "" 
    },
    users:[]
}
export const reducer = (state , action)=>{
    switch (action.type) {
        case "changeUser":
            return {...state , users: action.payload}
        case "isUpdate":
            return {...state , postData:action.payload}
        case "setInputValue":
            return {...state , postData:{
                ...state.postData ,
                [action.propName] : action.propValue
            }}    
        default:
            return state;
    }
}