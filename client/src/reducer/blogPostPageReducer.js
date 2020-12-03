import { SET_BLOGPOST_PAGE_NAME, SET_BRAND_DETAILS } from '../actions/type';

const initialState = {
    blogPostPageName : [],
    brandDetails : []
}

export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_BLOGPOST_PAGE_NAME :
            return {
                ...state,
                blogPostPageName : action.pageName
            }
        case SET_BRAND_DETAILS :
            return{
                ...state,
                brandDetails : action.brandDetails
            }
        default:
            return state;
    }
}