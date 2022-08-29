import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/CartContextComponent';
import {Link} from 'react-router-dom'


const ItemCount = ({product}) => {
const [count, setCount] = useState(1)
const [removeButton, setRemoveButton] = useState(false)
const {cart, addToCart} = useContext(cartContext)

function sum(){
    if(count < product.stock){
    setCount(count + 1)
    }
}

function res(){
    if(count >= 2){
    setCount(count - 1)
    }
}
function onAdd() { 
    addToCart(product, count)
    setRemoveButton(true)
}
useEffect(()=>{
    console.log(cart)
},[cart])
    
    return <>
    <div>
        <button style={{cursor: "pointer"}} onClick={sum}>+</button>
        {count}
        <button style={{cursor: "pointer"}} onClick={res}>-</button>
        <br />
        {removeButton ?(
            <>
            "Producto agregado!"
            <br />
            <Link to="/">
                <button style={{cursor: "pointer"}}>Seguir Comprando</button>
            </Link>
            <Link to="/checkout"><button style={{cursor: "pointer"}}>Finalizar Compra</button></Link>
            </>
        ) : (
        <button style={{cursor: "pointer"}} onClick={onAdd}>AGREGAR AL CARRITO</button>
        )}
    </div>
    </>
}

export default ItemCount 