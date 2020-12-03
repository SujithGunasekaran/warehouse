import { combineReducers } from 'redux';
import blogPostPageReducer from './blogPostPageReducer';
import productListReducer from './productListReducer';
import AuthenticationReducer from './AuthenticationReducer';
import CartReducer from './CartReducer';

export default combineReducers({
    blogPostPageReducer,
    productListReducer,
    AuthenticationReducer,
    CartReducer
});