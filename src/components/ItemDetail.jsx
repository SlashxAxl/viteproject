import React from 'react'
import { Link } from 'react-router-dom';

export default function ItemDetail({detalleProductos}){
    
    const [cart1, setCart1] = useState(false);
  
    const {addItem} = useCartContext();
  
    const onAdd = (count) => {
      swal({
          title: "Agregado!",
          text: `Se agregaron ${count} al carrito!`,
          icon: "success",
        })
      setCart1(true);
      addItem(detalleProductos, count);
  }
  



    

    return(<><div>
    <img src={detalleProductos.image} />
    <h1>{detalleProductos.name}</h1>
    <p>{detalleProductos.description}</p>
    <p>{detalleProductos.price}</p>
    {
              cart1
                ? <Link to='/cart'><button>Terminar compra</button></Link>
                : <ItemCount stock={detalleProductos.stock} onAdd={onAdd}/>
            }
    </div>
    </>)
}