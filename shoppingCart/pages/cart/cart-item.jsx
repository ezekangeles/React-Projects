import React,{useContext} from "react";
import { ShopContext } from '../../context/shop-context'

export const CartItem = (props) =>{
    const {id,productName, price, productImage} = props.data
    const { removeFromCart, cartItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
    return (
        <div className="cartItem">
           
            <img src={productImage} alt="image" />
            
            <div className="info">
                <h3>{productName}</h3>
                <p>${price}</p>
                <button onClick={() => removeFromCart(id)} className='addtoCart'>
                    Remove from Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
            
        </div>
            
        </div>
    )
}