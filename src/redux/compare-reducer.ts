import { ProductType } from "../types/types";

const ADD_TO_COMPARE = 'compare/ADD_TO_COMPARE'
const REMOVE_FROM_COMPARE = 'compare/REMOVE_FROM_COMPARE'

let initialState = {  
	comparingProducts: [] as Array<ProductType>
}

type InitialStateType = typeof initialState
type ActionsType = AddToCompareType | RemoveFromCompareType

const compareProducts = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
		case ADD_TO_COMPARE: {
			return {
				...state,
				comparingProducts: [...state.comparingProducts, action.product]
			}
		}
	   
		case REMOVE_FROM_COMPARE: {
			return {
				...state,
				comparingProducts: state.comparingProducts.filter(product => product.id !== action.id)
			}
		}
        default:
            return state;
    }
}

type AddToCompareType = {
	type: typeof ADD_TO_COMPARE
	product: ProductType
}
type RemoveFromCompareType = {
	type: typeof REMOVE_FROM_COMPARE
	id: number
}


export const addToCompare = (product: ProductType): AddToCompareType => {
	return {
		type: ADD_TO_COMPARE,
		product
	}
}
export const removeFromCompare = (id: number): RemoveFromCompareType => {
	return {
		type: REMOVE_FROM_COMPARE,
		id
	}
}

export default compareProducts;