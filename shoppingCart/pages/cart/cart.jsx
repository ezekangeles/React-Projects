import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products'
import { CartItem } from './cart-item'
import './cart.css'

const Cart = () =>{
    const { addToCart, cartItems } = useContext(ShopContext)
    return (
        <div className="cart">
            <h1>Your Cart Items</h1>
            <div className="cartItems">
                {PRODUCTS.map((product)=>{
                    if(cartItems[product.id] !== 0){
                        return <CartItem key={product.id} data={product}/>
                    }
                })}
            </div>
        </div>
    )
}

export default Cart