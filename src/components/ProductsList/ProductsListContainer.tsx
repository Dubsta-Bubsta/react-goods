import React, { useEffect, FC } from 'react'
import { useDispatch, useSelector} from "react-redux";

import ProductsList from './ProductsList'
import s from './ProductsList.module.css'
import { ProductType, AppStateType } from '../../types/types'
import { addToCart, removeFromCart } from '../../redux/cart-reducer';
import { addToCompare, removeFromCompare } from '../../redux/compare-reducer';


const ProductsListContainer: FC = (props) => {
	const products = useSelector<AppStateType, Array<ProductType>>(state => state.productsList.products);
	const cartProducts = useSelector<AppStateType, Array<ProductType>>(state => state.cart.cartProducts);
	const comparingProducts = useSelector<AppStateType, Array<ProductType>>(state => state.compareProducts.comparingProducts);
	const dispatch = useDispatch();

	const addToCartDispatch = (product: ProductType) => {
		dispatch(addToCart(product))
	}
	const removeFromCartDispatch = (id: number) => {
		dispatch(removeFromCart(id))
	}

	const addToCompareDispatch = (product: ProductType) => {
		dispatch(addToCompare(product))
	}
	const removeFromCompareDispatch = (id: number) => {
		dispatch(removeFromCompare(id))
	}
	return (
		<ProductsList 
		products={products} 
		cartProducts={cartProducts} 
		comparingProducts={comparingProducts} 
		addToCart={addToCartDispatch} 
		addToCompare={addToCompareDispatch} 
		removeFromCart={removeFromCartDispatch}
		removeFromCompare = {removeFromCompareDispatch}/>
		
	);
}
export default ProductsListContainer; 