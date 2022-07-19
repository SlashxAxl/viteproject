import React from 'react'
import CartWidget from '../CartWidget'

const Navbar = () => {
  return (
    <div>
        <button>Inicio</button>
        <button>Productos</button>
        <button>Promociones</button>
        <button>Sobre Nosotros</button>
        <button>Soporte al Cliente</button>
        <CartWidget/>
    </div>
  )
}

export default Navbar