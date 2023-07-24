import React, { createContext, useState, useContext } from 'react'
import { faker } from '@faker-js/faker';
const Cart = createContext();

faker.seed(100);

const Context = ({ children }) => {
    const [cart, setCart] = useState([]); 

    const productsArray =  [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image('200', '200', 'commerce'),
    }));

    console.log(productsArray);

    const [products] = useState(productsArray);

  return (
    <Cart.Provider value={{products, cart, setCart}}>
        { children }
    </Cart.Provider>
  )
}

export const CartState = () => {
    return useContext(Cart);
}

export default Context