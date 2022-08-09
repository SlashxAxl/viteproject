import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'



export default function ItemDetail({detalleProductos, count}){


    const [cart, setCart]= useState(false)

    const onAdd = (count) => {
        swal({
            title: "Agregado",
            text: 'se agregaron ${count} al carrito',
            icon:"success"
        })
        setCart(true)
    }

    return<>
    <div>
        <img src={detalleProductos.image} />
    </div>
    <div>
        <div>{detalleProductos.name}</div>
        <div>{detalleProductos.description}</div>
        <div>${detalleProductos.price}</div>
        <ItemCount stock={producto.stock}/>
        
    </div>
    </>
}