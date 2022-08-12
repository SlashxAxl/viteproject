import React from 'react'

export default function ItemDetail(detalleProductos){




    

    return(<><div>
    <img src={detalleProductos.image} />
    <h1>{detalleProductos.name}</h1>
    <p>{detalleProductos.description}</p>
    </div>
    </>)
}