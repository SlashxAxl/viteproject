import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { cartContext } from '../context/CartContextComponent';
import CARRITO from '../components/cartGif/CARRITO.png'


const CartWidget = () => {
  const {total} = useContext(cartContext)
  return (
    <Link to={'/cart'}>
      <img className='carritoImg' src={CARRITO}/>
      {total}
    </Link>
  )
}

export default CartWidget