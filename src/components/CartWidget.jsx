import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <Link to={'/cart'}>
      <BsFillCartFill size={40}/>
    </Link>
  )
}

export default CartWidget