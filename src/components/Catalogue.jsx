import React from 'react'

const Catalogue = ({producto,descripcion}) => {
  return (
    <div>
    <h1>{producto}</h1>
    <p>{descripcion}</p>
    </div>
  )
}

export default Catalogue