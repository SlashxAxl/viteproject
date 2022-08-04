import Navbar from './components/navBar/Navbar'
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  
    return(
      <>
      <BrowserRouter>
      <Navbar/>
      <br />
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
      <Route path='/producto/:idProducto' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<p>404</p>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App
