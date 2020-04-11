import React from 'react';
import s from './Header.module.css';
import searchImg from '../../assets/img/search.png'

const Search = () => {
	return (
		<div className={s.search_block} >
			<input type="text" />
			<button><img src={searchImg} alt="search" /></button>
		</div>
	)
}

export default Search;