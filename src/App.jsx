import React from 'react';
import './App.css';

import { Route } from "react-router-dom";
import { Switch } from 'react-router';
import { withRouter } from 'react-router'

import Header from './components/Header/Header'
import ProductsList from './components/ProductsList/ProductsList'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'

class App extends React.Component {
	render() {
		return (
			<div className="app-wrapper">
				<Route path="/" render={() => <Header />} />

				<div className='app-container'>
					<Switch>
						<Route exact path="/" render={() => <ProductsList />} />
						<Route path="/product/:productId" render={() => <Product />} />
						<Route path="/cart" render={() => <Cart />} />	
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		)
	}
}

export default withRouter(App);