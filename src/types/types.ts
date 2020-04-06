import { RootReducerType } from '../redux/redux-store'

export type AppStateType = ReturnType<RootReducerType>

export type ProductType = {
	id: number
	title: string
	price: number
	category: string
	count: number
	isOnStock: boolean
}