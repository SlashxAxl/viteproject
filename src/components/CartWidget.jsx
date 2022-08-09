import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../components/cart.svg'

const CartWidget = () => {
  return (
    <Link to={'/cart'}>
    <img src={cart} style={{height:30}}/>
    </Link>
  )
}

export default CartWidget