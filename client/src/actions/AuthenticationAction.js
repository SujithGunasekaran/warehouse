import { SET_USER_USERNAME, SET_USER_EMAIL, CLEAR_DATA } from './type';

export const setUserName = (username) => dispatch => {
    dispatch({
        type : SET_USER_USERNAME,
        userName : username
    })
}

export const setUserEmail = (email) => dispatch => {
    dispatch({
        type : SET_USER_EMAIL,
        emailAddress : email
    })
}

export const clearData = () => dispatch => {
    dispatch({
        type : CLEAR_DATA
    })
}
