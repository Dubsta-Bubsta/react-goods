import { createStore, combineReducers } from "redux";

import goodsReducer from "./goods-reducer";
import cartReducer from "./cart-reducer";
import compareReducer from "./compare-reducer";


let reducers = combineReducers({    
    goods: goodsReducer,
    cart: cartReducer,
    compareGoods: compareReducer,
}); 

let store = createStore(reducers);

export default store;