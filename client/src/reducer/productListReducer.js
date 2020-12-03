import { SET_PRODUCT_LIST, SET_PRODUCT_LIST_KEY, SET_PRODUCT_CHECKOUT_LIST, CLEAR_DATA} from '../actions/type';

const initialState = {
    productList : [],
    productListKey : [],
    productCheckoutList : []
}

export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_PRODUCT_LIST :
            return{
                ...state,
                productList : action.ProductList
            }
        case SET_PRODUCT_LIST_KEY :
            return{
                ...state,
                productListKey : action.ProductListKey
            }
        case SET_PRODUCT_CHECKOUT_LIST :
            return{
                ...state,
                productCheckoutList : action.productCheckoutList
            }
        case CLEAR_DATA :
            return{
                ...state,
                productCheckoutList : []
            }
        default : 
            return state;
    }
}