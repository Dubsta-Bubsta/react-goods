import { ProductType, AppStateType } from "../types/types";
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';

const ADD_TO_CART = 'cart/ADD_TO_CART'
const DELETE_FROM_CART = 'cart/DELETE_FROM_CART'


let initialState = {  
    cartProducts: [] as Array<ProductType>
}
type InitialStateType = typeof initialState
type ActionsType = AddToCartType | DeleteFromCartType
type ThunksType = ThunkAction<void, AppStateType, unknown, ActionsType>

const cartReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
		case ADD_TO_CART: {
			return {
				...state,
				cartProducts: [...state.cartProducts, action.product]
			}
		}
		case DELETE_FROM_CART: {
			return {
				...state,
				cartProducts: state.cartProducts.filter(product => product.id !== action.id)
			}
		}
       
        default:
            return state;
    }
}

type AddToCartType = {
	type: typeof ADD_TO_CART
	product: ProductType
}
type DeleteFromCartType = {
	type: typeof DELETE_FROM_CART
	id: number
}

export const addToCart = (product: ProductType) => {
	return {
		type: ADD_TO_CART,
		product
	}
}
export const removeFromCart = (id: number) => {
	return {
		type: DELETE_FROM_CART,
		id
	}
}

export default cartReducer;