import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import ItemDetail from './ItemDetail'



export default function ItemDetailContainer (){

const [product, setProduct]=useState({})
const {id} = useParams()

  useEffect(()=>{
    const db = getFirestore();
    const refDoc = doc(db,'Productos',id)

  getDoc(refDoc).then((item)=>{
    const auxProduct= {
      ...item.data(),id: item.id
    }
    setProduct(auxProduct)
  })
  
  },[id])
  
  return(<>
    <ItemDetail product={product}/>
  </>
  )

}
