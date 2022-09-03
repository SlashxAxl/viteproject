import React from 'react'
import ItemCount from './ItemCount';

export default function ItemDetail({product}){
    
    return(<>
    <div className='detailContainerCard'>
        <div >
    <h1 className='productName'>{product.name}</h1>
    <img className='detailImage' src={product.image} />
    <p className='productDescription'>{product.description}</p>
    <p className='productPrice'>${product.price} MXN</p>
    </div>
    <p className='productStock'>STOCK: {product.stock}</p>
    <ItemCount product={product}/>
    </div>
    </>)
}