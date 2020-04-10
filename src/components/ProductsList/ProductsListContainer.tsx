import React, { useEffect, FC } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { getProducts } from "../../redux/products-reducer";


import ProductsList from './ProductsList'
import s from './ProductsList.module.css'
import { ProductType, AppStateType } from '../../types/types'
import { AddToCart } from '../../redux/cart-reducer';
import { addToCompare } from '../../redux/compare-reducer';

type ProductsListContainerPropsType = {
	products: Array<ProductType>

}


const ProductsListContainer: FC<ProductsListContainerPropsType> = (props) => {
	useEffect(() => {
		getProducts()
		
	});


	const products = useSelector<AppStateType, Array<ProductType>>(state => state.productsList.products);
	const dispatch = useDispatch();


	return (
		<ProductsList products={products} addToCart={AddToCart} addToCompare={addToCompare}/>
	);
}
export default ProductsListContainer; 