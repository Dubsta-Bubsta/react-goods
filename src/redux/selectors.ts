import { createSelector } from "reselect";
import { AppStateType, ProductType } from '../types/types';

const getCartProductsSelector = (state: AppStateType) => {    
    return state.cart.cartProducts
}

export const getCartProductsCount = createSelector(getCartProductsSelector, (cartProducts: Array<ProductType>) => {
    return cartProducts.length;
})
