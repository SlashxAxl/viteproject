import React from 'react'
import SimpleStateFuncion from './ItemCount'

const Catalogue = ({producto,descripcion}) => {
  return (
    <div>
    <h1>{producto}</h1>
    <p>{descripcion}</p>
    <SimpleStateFuncion />
    </div>
  )
}

export default Catalogue