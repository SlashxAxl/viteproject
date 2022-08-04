import React from "react"
import SimpleStateFuncion from "./ItemCount"


export default function Item({producto}){
  return <>
  <div>
    {JSON.stringify(producto)}
    <SimpleStateFuncion/>
  </div>
  </>
}

