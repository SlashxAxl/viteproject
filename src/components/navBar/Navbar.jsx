import React from 'react'
import CartWidget from '../CartWidget'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={"/"}>Ir a Home</Link>
        <br />
        <Link to={"/categoria/Videojuegos"}>Videojuegos</Link>
        <br />
        <Link to={"/categoria/InstrumentosMusicales"}>Instrumentos Musicales</Link>
        <br />
        <Link to={"/categoria/RopayCalzado"}>Ropa y Calzado</Link>
        <CartWidget/>
    </div>
  )
}

export default Navbar