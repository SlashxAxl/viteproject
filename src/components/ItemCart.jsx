import React from 'react';
import { useCartContext } from '../context/CartContext';
import { BsFillCartXFill } from 'react-icons/bs';

const ItemCart = ({product}) => {
    const {removeItem} = useCartContext();

  return (
    <div>
        <div>
            <img src={product.image} alt={product.title}/>
        </div>
        <div >
            <p>{product.title}</p>
            <p>{product.quantity}</p>
            <p>${product.price}</p>
            <p>${product.quantity * product.price}</p>
            <div>
                <button onClick={() => removeItem(product.id)}><BsFillCartXFill /></button>
            </div> 
        </div>
    </div>
  )
}

export default ItemCart