import React from "react"
import { Link } from "react-router-dom"


export default function Item({producto}){


  

  return <>
  <div className="productCard" key={producto.id}>
                            <img className="productImage" src={producto.image}/>
                            <h1 className="productName">{producto.name}</h1>
                            <p className="productPrice">${producto.price}</p>
                            <Link to={`/producto/${producto.id}`}><button className="buttonPay" style={{cursor:"pointer"}}>Ver Detalles</button></Link>
                            
    </div>
  </>
}

