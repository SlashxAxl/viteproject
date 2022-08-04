import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'


export default function ItemList ({productos}){
  return<>
  <Link to={"/producto/:idProducto"}>
  {productos.map((producto)=>(
  <Item key={producto.idProducto} producto={producto}/>
  ))}
  </Link>
  </>
}