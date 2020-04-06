import React, { FC } from 'react'
import s from './ProductsList.module.css'
import { ProductType } from '../../types/types';

type ProductsListPropsType = {
	products: Array<ProductType>
	addToCart: (product: ProductType) => void
	addToCompare: (product: ProductType) => void
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
						<div>
							<img src="" alt="" />
							<p className={s.title}>{product.title}</p>
							<p className={s.price}>{product.price}</p>
							<div className={s.actions}>
								<div className="add_to_cart_btn btn" onClick={() => { props.addToCart(product) }}><img src="../../assets/img/cart.png" alt="cart-img"/></div>
								<div className="add_to_compare_btn btn" onClick={() => { props.addToCompare(product) }}><img src="../../assets/img/cart.png" alt="cart-img"/></div>
							</div>
						</div>
					)
				}
			</div>
        </div>
    );
}
export default ProductsList; 