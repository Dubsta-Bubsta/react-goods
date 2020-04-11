const TOGGLE_FILTER = 'filters/TOGGLE_FILTER'
const CHANGE_FILTER = 'filters/CHANGE_FILTER'

export enum  SortValueObj  {
	priceAsc = 'price-asc',
	priceDesc = 'price-desc',
	popularity = 'popularity',
	nameAsc = 'name-asc',
	nameDesc = 'name-desc'
}



let initialState = {  
	discount: false,
	onStock: false,
	sortBy: SortValueObj.popularity as SortValueObj
}

type InitialStateType = typeof initialState
type ActionsType = ToggleFilterType | SelectFilterType



const filtersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {		
		case TOGGLE_FILTER: {	
			let filters = {} as any

			let key: keyof InitialStateType
			for (key in state) {
				if (typeof state[key] === "boolean") {
					filters[key] = false
				} 
			}
			filters[action.filterName] = true

			return {
				...state,
				...filters
			}
		}
			
		case CHANGE_FILTER: {
			return {
				...state,
				sortBy: action.filterName
			}
		}
	
        default:
            return state;
    }
}

type TogglingFilterNameType = "discount" | "onStock"

type ToggleFilterType = {
	type: typeof TOGGLE_FILTER
	filterName: TogglingFilterNameType
}

type SelectFilterType = {
	type: typeof CHANGE_FILTER
	filterName: SortValueObj
}

// Only for discount and onStock filters
export const toggleFilter = (filterName: TogglingFilterNameType): ToggleFilterType => {
	return {
		type: TOGGLE_FILTER,
		filterName
	}
}

export const selectFilter = (filterName: SortValueObj): SelectFilterType => {
	return {
		type: CHANGE_FILTER,
		filterName
	}
}

export default filtersReducer;