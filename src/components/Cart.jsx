import React from 'react'
import { useCartContext } from '../context/cartContextComponent'
import ItemCart from './ItemCart';

const Cart = () => {
  const {cart, totalPrice} = useCartContext();


  if (cart.length === 0){
    return (
      <div>
        <p>No hay elementos en el carrito</p>
      </div>
    )
  }

  return (
    <div>
      <div>
        <p>Producto</p>
        <p>Cant</p>
        <p>Precio</p>
        <p>Subtotal</p>
      </div>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <p>Total: ${totalPrice()}</p>
    </div>
  )
}

export default Cart