//@ts-check

import Navbar from './components/navBar/Navbar'
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import { initializeApp } from "firebase/app";
import React from 'react';
import CartContextComponent from './context/CartContextComponent';

const firebaseConfig = {
  apiKey: "AIzaSyDydMLWeqvtIqtOVFjx0x4I7xBnwE70wEc",
  authDomain: "proyecto-final-reactjs-f03f4.firebaseapp.com",
  projectId: "proyecto-final-reactjs-f03f4",
  storageBucket: "proyecto-final-reactjs-f03f4.appspot.com",
  messagingSenderId: "244190836904",
  appId: "1:244190836904:web:bd17431355e1db2dbdaa9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  
  
    return(
      <>
      <CartContextComponent>
      <BrowserRouter>
      <Navbar/>
      <br />
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:Categoria' element={<ItemListContainer/>}/>
      <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<p>404</p>}/>
      </Routes>
      </BrowserRouter>
      </CartContextComponent>
      </>
  );
}

export default App
