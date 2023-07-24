import React from 'react'
import { CartState } from '../Context'
import './styles.css'

const SingleProduct = ({ prod }) => {
  const {cart, setCart} = CartState();
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className='productDesc'>
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>Rs.{prod.price.substring(0,3)}</span>
      </div>

      {
        cart.includes(prod) ? (
          <button className='add' onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id))
          }}>Remove From Cart</button>
        ) : (
          <button className='add' onClick={() => {
            setCart([...cart, prod])
          }}>Add To Cart</button>
        )
      }
      
    </div>
  )
}

export default SingleProduct