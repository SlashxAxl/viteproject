import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/CartContextComponent'
import TRASH from '../components/cartGif/TRASH.gif'
import { Link } from 'react-router-dom'
import CARRITOVACIO from '../components/cartGif/CARRITOVACIO.jpg'

export default function Cart(){
  const {cart, total, totalPrice, deleteItem} = useContext(cartContext)
  if(cart.length == 0){
    return(<>
    <img src= {CARRITOVACIO} />
    </>)}
  return (
    <>
    {cart.map((item)=>(
      <>
      <div>{item.name + ": " + item.count}<img src={TRASH} onClick={()=> deleteItem(item.id)} style={{cursor: "pointer"}}/></div>
      </>
    ))}
    <div>
      Tus productos: <br />
      {total} <br />
      a pagar: <br />
      {totalPrice}
    </div>
    <Link to = "/checkout"><button>Finalizar Compra</button></Link>
    </>
  )
}
