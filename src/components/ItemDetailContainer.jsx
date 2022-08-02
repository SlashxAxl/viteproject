import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer (){
    const [detalleProductos, setDetalleProductos]=useState([])
    useEffect(()=>{
        let detalles = [
            {id:100, detalle: "consola de videojuegos americana", precio: 13999},
            {id:101, detalle:"consola de videojuegos japonesa", precio:13999},
            {id:102, detalle:"consola hibrida de videojuegos japonesa", precio:10999}
        ]

        const promesaDetalles = new Promise((res)=>{
            setTimeout(() => {
                res(detalles)
            }, 2000);
        })
        promesaDetalles.then((resultado)=>{
            setDetalleProductos(resultado)
        })
    },[])
  return <ItemDetail detalles={detalleProductos}/>
}
