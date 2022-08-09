import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Productos from '../data/Productos.json'

export default function ItemDetailContainer (){
    const [detalleProductos, setDetalleProductos]=useState([])
    const {id} = useParams()
    
    useEffect(()=>{
        
        const promesaDetalles = new Promise((res)=>{
            setTimeout(() => {
                res(Productos)
                
            }, 2000);
        })
        promesaDetalles.then(Productos => setDetalleProductos(Productos.find(productoD => productoD.id === parseInt(id))))
        
    },[])
  return <ItemDetail detalles={detalleProductos} />
}
