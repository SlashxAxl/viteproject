import React from 'react'
import Catalogue from './Catalogue'

const ItemListContainer = () => {
  return (
    <>
    <h1>Catálogo</h1>
    <Catalogue producto='Xbox Series X' descripcion='Consola de videojuegos'/>
    <Catalogue producto='Playstation 5' descripcion='Consola de videojuegos'/>
    <Catalogue producto='Nintendo Switch' descripcion='Consola de videojuegos'/>
    </>
  )
}

export default ItemListContainer