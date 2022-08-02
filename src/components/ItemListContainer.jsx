import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

export default function ItemListContainer (){
  const [productos, setProductos] = useState([])
  useEffect(()=>{
    let productos = [
      {id: 100, name: "Xbox Series X"},
      {id: 101, name: "PlayStation 5"},
      {id: 102, name: "Nintendo Switch Oled"}
    ]
  
    const promesaProductos = new Promise((res) => {
      setTimeout(() => {
        res(productos)
      }, 2000);
    })

    
    promesaProductos.then((resultado)=>{
      setProductos(resultado)
    })
  },[])
  
  return<> 
  <ItemList productos={productos}/></>
}
