import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/cartContextComponent';

const ItemCount = ({product}) => {
const [count, setCount] = useState(1)
const {cart, setCart} = useContext(cartContext)

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
    //alert('Se agregaron ' + [count] + ' ' + [product.name] + ' a tu carrito!')
    setCart([...cart,{...product,count:count}])
}
    
    return <>
    <div>
        <button style={{cursor: "pointer"}} onClick={sum}>+</button>
        {count}
        <button style={{cursor: "pointer"}} onClick={res}>-</button>
        <br />
        <button onClick={onAdd}>AGREGAR AL CARRITO</button>
    </div>
    </>
}

export default ItemCount 