import React from "react"
import { Link } from "react-router-dom"


export default function Item({producto}){


  

  return <>
  <div key={producto.id}>
                            <img src={producto.image}/>
                            <h1>{producto.name}</h1>
                            <p>${producto.price}</p>
                            <Link to={`/producto/${producto.id}`}><button>Ver Detalles</button></Link>
                            
    </div>

  </>
}

