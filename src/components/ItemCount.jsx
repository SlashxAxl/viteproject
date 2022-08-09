import React, { useEffect, useState } from 'react'

const ItemCount = ({stock,onAdd}) => {
    const [count,setCount]=useState(1)
    
    
    function ClickMas (){
        if(count < stock){
            setCount(count + 1)
        }
    }

    function ClickMenos(){
        if(count > 1){
            setCount(count - 1)
        }
    }

    useEffect(()=>{

    },[count])

    return (
    <div>
        <div>
        <div onClick={ClickMenos}></div>
        <div>{count}</div>
        <div onClick={ClickMas}></div>
        </div>
        <button onClick={()=>onAdd(count)}>Agregar al Carrito</button>
    </div>
    )
}

export default ItemCount