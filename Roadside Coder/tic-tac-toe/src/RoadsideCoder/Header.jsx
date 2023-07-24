import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'
import { CartState } from '../Context'

const Header = () => {
  const {cart} = CartState();
  return (
    <div>
      <span className='header'>React Context API Tutorial</span>
      <ul className="nav">
        <li className="prod">
          <NavLink to='/'>Home Page</NavLink>
        </li>
        <li className="prod1">
          <NavLink to='/cart'>WishList ({cart.length})</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header