import React from "react"
import SimpleStateFuncion from "./ItemCount"
import ItemDetail from "./ItemDetail"
import ItemDetailContainer from "./ItemDetailContainer"

export default function Item({producto}){
  return <>
  <div>
    {JSON.stringify(producto)}
    <SimpleStateFuncion/>
    <button onClick={<ItemDetailContainer/>}>Mostrar detalles del producto</button>
  </div>
  </>
}

