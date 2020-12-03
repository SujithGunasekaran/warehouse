import { SET_BLOGPOST_PAGE_NAME, SET_BRAND_DETAILS } from './type';


export  const setBlogpostPage = (blogPostPageName) => dispatch => {
    dispatch({
        type : SET_BLOGPOST_PAGE_NAME,
        pageName : blogPostPageName
    })
}


export const setBrandDetails = (brandDetails) => dispatch => {
    dispatch({
        type : SET_BRAND_DETAILS,
        brandDetails : brandDetails
    })
}