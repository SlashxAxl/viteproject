import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer (){
    const [detalleProductos, setDetalleProductos]=useState([])
    const {idProducto} = useParams();
    
    useEffect(()=>{
        let detalles = [
            {idProducto:100, detalle: "consola de videojuegos americana", precio: 13999},
            {idProducto:101, detalle:"consola de videojuegos japonesa", precio:13999},
            {idProducto:102, detalle:"consola hibrida de videojuegos japonesa", precio:10999},
            {idProducto:103, detalle:"Guitarra electrica de 6 cuerdas", precio:14999},
            {idProducto:104, detalle:"Piano de ala estilo clasico", precio:24999},
            {idProducto:105, detalle:"calzado para caballero marca converse", precio:1499},
            {idProducto:106, detalle:"camisa de tela unisex con estampado", precio:499}
        ]

        const promesaDetalles = new Promise((res)=>{
            setTimeout(() => {
                if(!idProducto){
                    res(detalles)
                } else{
                    res(detalles.filter(detail=>detail.idProducto===idProducto))
                }
                
            }, 2000);
        })
        promesaDetalles.then((resultado)=>{
            setDetalleProductos(resultado)
        })
    },[idProducto])
  return <ItemDetail detalles={detalleProductos} />
}
