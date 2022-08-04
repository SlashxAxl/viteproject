import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'


export default function ItemDetail({detalles}){
    return<>
    <div>
    {detalles.map((detalles)=>(<ItemDetailContainer detalles={detalles}/>))}
    </div>
    </>
}