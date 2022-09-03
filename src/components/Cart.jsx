import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/CartContextComponent'
import { Link } from 'react-router-dom'
import CARRITOVACIO from '../components/cartGif/CARRITOVACIO.jpg'
import TRASH from '../components/cartGif/TRASH.png'

export default function Cart(){
  const {cart, total, totalPrice, deleteItem} = useContext(cartContext)
  if(cart.length == 0){
    return(<>
    <img className='carritoVacioImg' src= {CARRITOVACIO}/>
    </>)}
  return (
    <>
    <div className='detailCart'>
    {cart.map((item)=>(
      <>
      <div>
          <div>
            <img className='detailCartImage' src={item.image}/>
          </div>
          <div className='productCount'>
          {item.name + ": " + item.count}<img className='deleteProduct' src={TRASH} onClick={()=> deleteItem(item.id)} style={{cursor:"pointer"}}/>
          </div>
      </div>
      </>
    ))}
    <div className='productPay'>
      Total a pagar: ${totalPrice} MXN
    </div>
    <div className='buttonFC'>
    <Link to = "/checkout"><button >Finalizar Compra</button></Link>
    </div>
    </div>
    </>
  )
}
