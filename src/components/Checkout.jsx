import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { cartContext } from '../context/CartContextComponent'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import CARRITOVACIO from '../components/cartGif/CARRITOVACIO.jpg'

export default function Checkout() {
  const {totalPrice, cart, deleteAll} = useContext(cartContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cellphone, setCellphone] = useState("")
  const [orderId, setOrderId] = useState("")
  function validationForm(){
  const ticket = {
    buyer: {name, cellphone, email},
    totalPrice,
    cart
  }
  const db = getFirestore()
  const orders = collection(db, 'Orders')
  addDoc(orders, ticket).then(({id})=>{setOrderId(id); deleteAll()})
}
if(cart.length == 0){
  return(<>
  <img src={CARRITOVACIO} />
  </>)
}
  return (<>
    {orderId ? ("Gracias por tu compra! Esperamos que vuelvas pronto! Tu Orden de compra es: " + setOrderId ) : (
    <div>
      <h1>Ingresa tus datos para el envio de tus productos</h1>
      <input type="text" placeholder='Ingresa tu nombre' onChange={(e) => setName(e.target.value)} /> <br />
      <input type="tel" placeholder='Ingresa tu numero celular' onChange={(e) => setCellphone(e.target.value)} /> <br />
      <input type="email" placeholder='Ingresa tu Email' onChange={(e) => setEmail(e.target.value)} />
      <button onClick={validationForm}>Enviar Productos</button>
    </div>
    )}
    </>
  )
}
