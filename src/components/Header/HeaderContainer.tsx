import React from 'react';
import { useDispatch, useSelector} from "react-redux";
import { AppStateType, ProductType } from '../../types/types'

import Header from './Header'

const HeaderConainer = () => {
	const cartProductsCount = useSelector<AppStateType, Array<ProductType>>(state => state.cart.cartProducts);
	const dispatch = useDispatch();

	return (
		<Header
			cartProductsCount={cartProductsCount.length}/>
	)
}

export default HeaderConainer;