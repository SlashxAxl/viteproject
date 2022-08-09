import React from "react"
import SimpleStateFuncion from "./ItemCount"
import { Link } from "react-router-dom"


export default function Item({producto}){
  return <>
  <div className='hover:shadow-xl max-w-[300px] m-auto text-center mb-12 border rounded-xl'>
                            <Link to={`/producto/${producto.id}`}><img src={producto.image} className='rounded-t-xl'/></Link>
                            <Link to={`/producto/${producto.id}`}><h1 className='font-bold text-2xl p-1'>{producto.name}</h1></Link>
                            <p className='text-gray-700 text-2xl pb-2'>${producto.price}</p>
                            <Link to={`/producto/${producto.id}`}><button className='p-[12px] text-black font-bold bg-yellow-400 rounded-b-xl text-center cursor-pointer w-full text-2xl hover:bg-yellow-300'>Ver Detalles</button></Link>
                            {/* <ItemCount stock={producto.stock}/> */}
    </div>
  </>
}

