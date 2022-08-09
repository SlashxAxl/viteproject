import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import Productos from '../data/Productos.json'



export default function ItemListContainer (){
  const [productos, setProductos] = useState([])
  const {Categoria} = useParams()

  useEffect(()=>{
    
    const promesaProductos = new Promise((resolve) => {
      setTimeout(() => {
        if(!Categoria) {resolve(Productos)}
                else resolve(Productos.filter(Productos=>Productos.Categoria===Categoria))
        
      }, 2000);
    })

    
    promesaProductos.then((resultado)=>{
      setProductos(resultado)
    })
  },[Categoria])
  
  return<> 
  <ItemList productos={productos}/></>
}
