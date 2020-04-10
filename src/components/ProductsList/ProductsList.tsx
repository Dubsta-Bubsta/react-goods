import React, { FC } from 'react'
import s from './ProductsList.module.css'
import { ProductType } from '../../types/types'
import ProductsListItem from './ProductListItem/ProductsListItem'

type ProductsListPropsType = {
	products: Array<ProductType>
	cartProducts: Array<ProductType>
	comparingProducts: Array<ProductType>
	addToCart: (product: ProductType) => void
	addToCompare: (product: ProductType) => void
	removeFromCart: (id: number) => void
	removeFromCompare: (id: number) => void	
}


const ProductsList: FC<ProductsListPropsType> = ({products, ...props}) => {
    return (
        <div className={s.productsListBlock}>
			<h1>List of Products</h1>
			<div className={s.filtersBlock}>
				
			</div>
			<div className={s.productList}>
				{
					products.map(product =>
						<ProductsListItem
							product={product}
							cartProducts={props.cartProducts}
							comparingProducts={props.comparingProducts}
							key={product.id}
							addToCart={props.addToCart}
							addToCompare={props.addToCompare}
							removeFromCart={props.removeFromCart}
							removeFromCompare={props.removeFromCompare}
						/>
					)
				}
			</div>
        </div>
    );
}
export default ProductsList; 
