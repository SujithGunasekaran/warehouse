import { SET_PRODUCT_LIST, SET_PRODUCT_LIST_KEY, SET_PRODUCT_CHECKOUT_LIST, CLEAR_DATA } from './type';

export const setProductList = (productList) => dispatch => {
    dispatch({
        type : SET_PRODUCT_LIST,
        ProductList : productList
    })
}

export const setProductListKey = (productListKey) => dispatch => {
    dispatch({
        type : SET_PRODUCT_LIST_KEY,
        ProductListKey : productListKey
    })
}

export const setProductCheckoutList = (productCheckoutList) => dispatch => {
    dispatch({
        type : SET_PRODUCT_CHECKOUT_LIST,
        productCheckoutList : productCheckoutList
    })
}

export const clearData = () => dispatch => {
    dispatch({
        type : CLEAR_DATA
    })
}
