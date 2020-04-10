import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, combineReducers, applyMiddleware } from "redux"

import productsReducer from "./products-reducer"
import cartReducer from "./cart-reducer"
import compareProducts from "./compare-reducer"

import thunkMiddleware from "redux-thunk"

let rootReducer = combineReducers({    
    productsList: productsReducer,
    cart: cartReducer,
    compareProducts: compareProducts,
}); 


export type RootReducerType = typeof rootReducer

const store = createStore(rootReducer,composeWithDevTools (applyMiddleware(thunkMiddleware)));
export default store;