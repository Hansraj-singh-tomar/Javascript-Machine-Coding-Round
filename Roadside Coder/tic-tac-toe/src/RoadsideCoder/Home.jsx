import React from 'react'
import { CartState } from '../Context';
import SingleProduct from './SingleProduct';

const Home = () => {
    const {products} = CartState();
  return (
    <div className='productContainer'>
        {products.map((prod, id) => (
            <SingleProduct prod={prod} key={prod.id} />
        ))}
    </div>
  )
}

export default Home

// <span key={id}>{prod.name}</span>