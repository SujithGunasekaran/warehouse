import { SET_CART_COUNT, SET_CART_DATA, CLEAR_DATA } from '../actions/type';

const initialState = {
    cartCount : 0,
    cartData : []
}

export default function(state = initialState,action){
    switch(action.type){
        case SET_CART_COUNT : 
            return{
                ...state,
                cartCount : action.cartCount
            }
        case SET_CART_DATA : 
            return{
                ...state,
                cartData : action.cartData
            }
        case CLEAR_DATA : 
            return {
                cartCount : 0,
                cartData : []
            }
        default : 
            return state
    }
}