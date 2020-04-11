import React, { FC } from 'react';
import s from './Header.module.css';
import classnames from 'classnames'
import { NavLink } from 'react-router-dom';

import cartImg from '../../assets/img/cart.png'

type CartQuantityPropsType = {
	cartProductsCount: number
}

const CartQuantity: FC<CartQuantityPropsType> = ({cartProductsCount, ...props}) => {
	return (
		<div className={s.cart}>
			<NavLink to="/cart"><img src={cartImg} alt="cart-img" /></NavLink>
			<span className={classnames(s.cart_products_counter)}>{cartProductsCount}</span>
		</div>
	)
}

export default CartQuantity;