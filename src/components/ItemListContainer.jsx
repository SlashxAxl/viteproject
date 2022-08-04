import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'

export default function ItemListContainer (){
  const [productos, setProductos] = useState([])
  const {idCategoria} = useParams();
  useEffect(()=>{
    let productos = [
      {idProducto: 100, name: "Xbox Series X", idCategoria:"Videojuegos"},
      {idProducto: 101, name: "PlayStation 5", idCategoria:"Videojuegos"},
      {idProducto: 102, name: "Nintendo Switch Oled", idCategoria:"Videojuegos"},
      {idProducto: 103, name: "Gibson Les Paul", idCategoria:"InstrumentosMusicales"},
      {idProducto: 104, name: "GB1K", idCategoria:"Instrumentos Musicales"},
      {idProducto: 105, name: "Converse All Star", idCategoria:"RopayCalzado"},
      {idProducto: 106, name: "Aeropostale T-Shirt", idCategoria:"RopayCalzado"}
    ]
  
    const promesaProductos = new Promise((res) => {
      setTimeout(() => {
        if(!idCategoria){
          res(productos)
        } else {
          res(productos.filter(producto=>producto.idCategoria===idCategoria))
        }
        
      }, 2000);
    })

    
    promesaProductos.then((resultado)=>{
      setProductos(resultado)
    })
  },[idCategoria])
  
  return<> 
  <ItemList productos={productos}/></>
}
