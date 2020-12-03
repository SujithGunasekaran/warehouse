import { SET_USER_USERNAME, SET_USER_EMAIL, CLEAR_DATA } from '../actions/type';

const initialState = {
    userName : '',
    emailAddress : '',
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_USER_USERNAME : 
            return{
                ...state,
                userName : action.userName
            }
        case SET_USER_EMAIL : 
            return{
                ...state,
                emailAddress : action.emailAddress
            }
        case CLEAR_DATA : 
            return{
                userName:'',
                emailAddress:''
            }
        default : 
            return state
    }
}