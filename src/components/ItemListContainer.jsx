import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'



export default function ItemListContainer (){

const [products, setProducts]=useState([])
const {Categoria} = useParams()

  useEffect(()=>{
    const db = getFirestore();
    let coleccion;

  if(!Categoria){
    coleccion = collection(db,"Productos")
    
  }else{
    coleccion =  query(collection(db,"Productos"), where("Categoria","==",Categoria))
    
  }
  getDocs(coleccion).then((data)=>{
    const auxProducts= data.docs.map((products)=>({
      ...products.data(),id: products.id
    }))
    setProducts(auxProducts)
  })
  
  },[Categoria])
  
  return(
  <div className='listContainer'>
  <ItemList productos={products}/>
  </div>
  )

}
