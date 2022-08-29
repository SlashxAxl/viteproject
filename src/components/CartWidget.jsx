import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { cartContext } from '../context/CartContextComponent';
import CARTGIF from '../components/cartGif/CARTGIF.gif'


const CartWidget = () => {
  const {total} = useContext(cartContext)
  return (
    <Link to={'/cart'}>
      <img src={CARTGIF}/>
      {total}
    </Link>
  )
}

export default CartWidget