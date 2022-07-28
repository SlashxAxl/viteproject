import React from 'react'
import datos from './Item'

const ItemList = () => {
  return new Promise ((resolve,)=>{
    setTimeout(()=>{
        resolve(datos)
    },2000)
  })
}

ItemList().then((datos)=>console.log(datos))

export default ItemList