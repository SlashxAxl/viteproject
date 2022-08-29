import React from 'react'
import { useEffect } from 'react'
import { createContext, useState } from 'react'

export const cartContext = createContext([])

export default function CartContextComponent({children}) {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    function addToCart(item, count){
        const cartAux = [...cart]
        let onCart = false
        for (let index = 0; index < cart.length; index++) {
            if (cartAux[index].id == item.id) {
                cartAux[index].count = cartAux[index].count + count
                onCart = true
            }
            
        }
        if(!onCart){
            cartAux.push({...item,count})
        }

        setCart(cartAux)
    }
    useEffect(()=>{
        setTotal(cart.reduce((acc, item) => acc + item.count, 0))
        setTotalPrice(cart.reduce((acc,item) => acc + item.count * item.price,0))
    },[cart])

    function deleteItem(id){
        setCart(cart.filter((item) => item.id != id))
    }

    function deleteAll(){
        setCart([])
    }
    return (
        <cartContext.Provider value={{cart, addToCart, total, totalPrice, deleteItem, deleteAll}}>
            {children}
        </cartContext.Provider>
    )
}
