import { AppStateType, ProductType } from '../types/types'
import { ThunkAction } from 'redux-thunk'

import cherryImg from '../assets/img/Cherry.png'
import nutsImg from '../assets/img/Nuts.png'
import orangeImg from '../assets/img/Orange.png'
import strawberryImg from '../assets/img/Strawberry.png'

const SET_PRODUCTS = 'products/SET_PRODUCTS'
const ADD_PRODUCT = 'products/ADD_PRODUCT'
const EDIT_PRODUCT = 'products/EDIT_PRODUCT'
const DELETE_PRODUCT = 'products/DELETE_PRODUCT'

let initialState = {
	products: [
		{
			id: 1,
			title: 'First product',
			price: 55,
			category: 'First category',
			count: 10,
			avaliableForSale: true,
			img: cherryImg
		},
		{
			id: 2,
			title: 'Second product',
			price: 110,
			category: 'Second category',
			count: 7,
			avaliableForSale: false,
			img: nutsImg
		},
		{
			id: 3,
			title: 'Third product',
			price: 150,
			category: 'Third category',
			count: 5,
			avaliableForSale: true,
			img: orangeImg
		},
		{
			id: 5,
			title: 'Third product',
			price: 150,
			category: 'Third category',
			count: 5,
			avaliableForSale: true,
			img: strawberryImg
		}
	] as Array<ProductType>
}

type InitialStateType = typeof initialState;
type ActionsTypes = SetProductsType | AddProductType | DeleteProductType | EditProductType;

const productsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case SET_PRODUCTS: {
			return {
				...state,
				products: action.products
			}
		}
		case ADD_PRODUCT: {
			let product = {
				id: state.products[state.products.length - 1].id + 1,
				...action.product
			}

			return {
				...state,
				products: [...state.products, product]
			}
		}
		case EDIT_PRODUCT: {
			let newProducts = state.products.filter(product => product.id !== action.id)

			return {
				...state,
				products: [...newProducts, action.product]
			}
		}
		case DELETE_PRODUCT: {
			return {
				...state, 
				products: state.products.filter(product => product.id !== action.id)
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
type AddProductType = {
	type: typeof ADD_PRODUCT
	product: ProductType
}
type EditProductType = {
	type: typeof EDIT_PRODUCT
	id: number
	product: ProductType
}
type DeleteProductType = {
	type: typeof DELETE_PRODUCT
	id: number
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
export const addProduct = (product: ProductType): AddProductType => {
	return {
		type: ADD_PRODUCT,
		product
	}
}
export const editProduct = (id: number, product: ProductType): EditProductType => {
	return {
		type: EDIT_PRODUCT,
		id,
		product
	}
}
export const deleteProduct = (id: number): DeleteProductType => {
	return {
		type: DELETE_PRODUCT,
		id		
	}
}

export default productsReducer;