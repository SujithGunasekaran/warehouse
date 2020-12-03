import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import AllReduser from './reducer';
// const initialState = {};
// const middleware = [thunk];

function saveToLocalStorage(state)
{
    try{
        var serializedData = JSON.stringify(state)
        localStorage.setItem('state',serializedData)
    }
    catch(e){
        console.log(e)
    }
}

function loadFromLocalStorage()
{
    try{
        var serializedData = localStorage.getItem('state')
        if(serializedData === null) return undefined
        return JSON.parse(serializedData)
    }
    catch(e)
    {
        console.log(e)
        return undefined
    }
}

var storedReduxData = loadFromLocalStorage()

// const sampleLogger = (store) => (next) => (action) =>{
//     console.log("logger action =>", action)
//     next(action)
// }


const store = createStore(
    AllReduser,
    storedReduxData,
    // initialState,
    compose(
        applyMiddleware(thunk)
        // for log purpose applyMiddleware(thunk,logger),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);


// store.subscribe(()=> store.getState())
store.subscribe(()=> saveToLocalStorage(store.getState()))

export default store;