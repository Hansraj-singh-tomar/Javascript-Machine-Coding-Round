import React from 'react'
import './App.css'

// import Game from './tic-tac-toe-folder/Game'
import Header from './RoadsideCoder/Header'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './RoadsideCoder/Cart';
import Home from './RoadsideCoder/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <Game /> */}
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App