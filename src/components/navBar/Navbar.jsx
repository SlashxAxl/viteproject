import React from 'react'
import CartWidget from '../CartWidget'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (<>
    <nav className='navBar'>
      <ul>
        <li><Link className='navLink' to={"/"}>Ir a Home</Link></li>
        <li><Link className='navLink' to={"/categoria/Videojuegos"}>Videojuegos</Link></li>
        <li><Link className='navLink' to={"/categoria/InstrumentosMusicales"}>Instrumentos Musicales</Link></li>
        <li><Link className='navLink' to={"/categoria/RopayCalzado"}>Ropa y Calzado</Link></li>
        <li><CartWidget/></li>
        <li>
          <Link className='navLink' to= {"/checkout"}>Ir a pagar</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar