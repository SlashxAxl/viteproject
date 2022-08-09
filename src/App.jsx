import Navbar from './components/navBar/Navbar'
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'

function App() {
  
    return(
      <>
      <BrowserRouter>
      <Navbar/>
      <br />
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:Categoria' element={<ItemListContainer/>}/>
      <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<p>404</p>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App
