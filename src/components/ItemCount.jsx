import React, { useEffect, useState } from 'react';
import {BsCartDash, BsCartPlus} from 'react-icons/bs';

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(1);

    function handleClickMas(){
        if (count < stock){
            setCount(count + 1);
        }
    }

    function handleClickMenos(){
        if(count > 1){
            setCount(count -1)
        }
    }

    useEffect(() => {
        
    }, [count])

    

    return (
        <div>
            <div>
                <div><BsCartDash/></div>
                <div>{count}</div>
                <div onClick={handleClickMas}><BsCartPlus/></div>
            </div>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>        </div>
    )
}

export default ItemCount