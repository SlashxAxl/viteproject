import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Productos from '../data/Productos.json'




export default function ItemListContainer (){
    const [detalleProductos, setDetalleProductos] = useState([])
    const {id} = useParams()

    useEffect(()=>{
    
        const promesaDetalles = new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos)
            
        }, 2000);
    })  

        promesaDetalles.then(Productos=>setDetalleProductos(Productos.find(producto=>producto.id===parseInt(id))))
    },[parseInt(id)])
    
    return(
        <ItemDetail detalleProductos={detalleProductos}/>
    ) 
    
    }
/*const ItemDetailContainer =()=>{
    const [detalleProductos,setDetalleProductos]=useState([])
    const {id} = useParams()


useEffect(()=>{
    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos)
        }, 2000);
    })
    getItem.then(res=>setDetalleProductos(res.find(productoData=>productoData.id===id)))
},[])

return(
    <ItemDetail detalles={detalleProductos} />
)

}



export default function ItemDetailContainer (){
    const [detalleProductos, setDetalleProductos]=useState([])
    const {id} = useParams()
    
    useEffect(()=>{
        
        const promesaDetalles = new Promise(res=>{
            
        }
    )},[])
  return <>
  <ItemDetail detalleProductos={detalleProductos} />
  </>
}


export default ItemDetailContainer*/