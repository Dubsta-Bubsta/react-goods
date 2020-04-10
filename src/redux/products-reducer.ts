import { AppStateType, ProductType } from '../types/types'
import { ThunkAction } from 'redux-thunk'

const SET_PRODUCTS = 'products/SET_PRODUCTS'

let initialState = {
	products: [
		{
			id: 1,
			title: 'First product',
			price: 55,
			category: 'First category',
			count: 10,
			avaliableForSale: true,
		},
		{
			id: 2,
			title: 'Second product',
			price: 110,
			category: 'Second category',
			count: 7,
			avaliableForSale: false,
		},
		{
			id: 3,
			title: 'Third product',
			price: 150,
			category: 'Third category',
			count: 5,
			avaliableForSale: true,
		}
	] as Array<ProductType>
}

type InitialStateType = typeof initialState;
type ActionsTypes = SetProductsType;

const productsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case SET_PRODUCTS: {
			return {
				...state,
				products: action.products
			}
		}

		default:
			return state;
	}
}



type SetProductsType = {
	type: typeof SET_PRODUCTS
	products: Array<ProductType>
}


type ThunksType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getProducts = (): ThunksType => async (dispatch) => {
	
	// setProducts(products)
}

export const setProducts = (products: Array<ProductType>): SetProductsType => {
	return {
		type: SET_PRODUCTS,
		products
	}
}


export default productsReducer;