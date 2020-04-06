import { ProductType } from "../types/types";

const ADD_TO_CART = 'cart/ADD_TO_CART'


let initialState = {  
    cartGoods: [] as Array<ProductType>
}
type InitialStateType = typeof initialState
type ActionsType = AddToCartType

const cartReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        
       
        default:
            return state;
    }
}

type AddToCartType = {
	type: typeof ADD_TO_CART
	product: ProductType
}

export const AddToCart = (product: ProductType): AddToCartType => {
	return {
		type: ADD_TO_CART,
		product
	}
}


export default cartReducer;