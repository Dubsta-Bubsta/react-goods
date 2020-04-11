import React, { FC } from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/img/logo.png'

import Search from './Search'
import CartQuantity from './CartQuantity'

type HeaderPropsType = {
	cartProductsCount: number
}

const Header: FC<HeaderPropsType> = ({ cartProductsCount, ...props }) => {

	return (
		<header>
			<NavLink  to="/"><img src={logo} className={s.logo} alt="logo"/></NavLink>
		
			<Search />
			<CartQuantity cartProductsCount={cartProductsCount}/>
			<NavLink to="/login">Login</NavLink>
			
		</header>
	)
}

export default Header;