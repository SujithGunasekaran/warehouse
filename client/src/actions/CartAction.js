import { SET_CART_COUNT, SET_CART_DATA, CLEAR_DATA } from './type';


export const setCartCount = (count) => dispatch =>{
    dispatch({
        type : SET_CART_COUNT,
        cartCount : count
    })
}

export const setCartData = (data) => dispatch => {
    dispatch({
        type : SET_CART_DATA,
        cartData : data
    })
}


export const clearData = () => dispatch => {
    dispatch({
        type : CLEAR_DATA
    })
}