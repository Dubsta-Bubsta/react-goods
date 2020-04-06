import { ProductType } from "../types/types";

const ADD_TO_COMPARE = 'ADD_TO_COMPARE'

let initialState = {  
	comparingProducts: [] as Array<ProductType>
}

type InitialStateType = typeof initialState
type ActionsType = AddToCompareType

const compareProducts = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
		case ADD_TO_COMPARE: {
			return {
				...state,
				comparingProducts: [...state.comparingProducts, action.product]
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


export const addToCompare = (product: ProductType): AddToCompareType => {
	return {
		type: ADD_TO_COMPARE,
		product
	}
}


export default compareProducts;