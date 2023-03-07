import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

const Product = (props) =>{
    const {id,productName, price, productImage} = props.data
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
    return(
        <div className="product">
            <img src={productImage} alt="image" />
            
            <div className="info">
                <h3>{productName}</h3>
                <p>${price}</p>
            </div>
            <button onClick={() => addToCart(id)} className='addtoCart'>
                Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    )
}

export default Product