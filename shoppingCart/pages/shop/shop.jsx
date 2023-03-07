import React from 'react'
import {PRODUCTS} from '../../products'
import Product from './product'
import './shop.css'
import { CartItem } from '../cart/cart-item'

const Shop = () =>{
    return (
        <div>
            <div className="shop">
                {PRODUCTS.map((product, key) =>{
                    return(
                        <Product key={key} data={product} />
                    )
                })}
            </div>
            
        </div>
    )
}

export default Shop