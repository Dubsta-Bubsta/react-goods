import React, { FC } from 'react'
import s from './ProductsListItem.module.css'
import classnames from 'classnames'

import { ProductType } from '../../../types/types';

import cartImg from '../../../assets/img/cart.png'
import compareImg from '../../../assets/img/compare.png'

type ProductsListItemPropsType = {
	product: ProductType
	cartProducts: Array<ProductType>
	comparingProducts: Array<ProductType>
	addToCart: (product: ProductType) => void
	removeFromCart: (id: number) => void
	addToCompare: (product: ProductType) => void
	removeFromCompare: (id: number) => void
	
}


const ProductsListItem: FC<ProductsListItemPropsType> = ({ product, cartProducts, comparingProducts, ...props }) => {
	let cartBtn;
	if (cartProducts.some(cartProduct => cartProduct.id === product.id)) {
		cartBtn = <button className={classnames(s.remove_btn, s.btn)} onClick={() => { props.removeFromCart(product.id) }}><img src={cartImg} alt="cart-img" /></button>
	} else {
		cartBtn = <button className={classnames(s.add_to_cart, s.btn)} onClick={() => { props.addToCart(product) }}><img src={cartImg} alt="cart-img" /></button>		
	}

	let compareBtn;
	if (comparingProducts.some(compareProduct => compareProduct.id === product.id)) {
		compareBtn = <button className={classnames(s.remove_btn, s.btn)} onClick={() => { props.removeFromCompare(product.id) }}><img src={compareImg} alt="compare-img" /></button>
	} else {
		compareBtn = <button className={classnames(s.add_to_compare, s.btn)} onClick={() => { props.addToCompare(product) }}><img src={compareImg} alt="compare-img" /></button>	
	}

	return (
		<div className={s.product}>
			<img className={s.img} src={product.img} alt="product-image" />
			<div className={s.info}>
				<p className={s.title}>{product.title}</p>
				<p className={s.price}>{product.price}</p>
			</div>
			<div className={s.actions}>
				{ cartBtn }				
				{ compareBtn }
			</div>
		</div>
	);
}
export default ProductsListItem; 
