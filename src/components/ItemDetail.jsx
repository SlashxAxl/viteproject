import React from 'react'
import ItemCount from './ItemCount';

export default function ItemDetail({product}){
    
    return(<><div>
    <h1>{product.name}</h1>
    <img src={product.image} />
    <p>{product.description}</p>
    <p>${product.price} MXN</p>
    </div>
    <p>STOCK: {product.stock}</p>
    <ItemCount product={product}/>
    </>)
}