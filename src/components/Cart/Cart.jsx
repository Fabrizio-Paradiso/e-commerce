import { useCartContext } from "../../context/CartContext"


function Cart() {
    const { cartList, clearCart } = useCartContext()
    return (
      <div className="d-flex flex-column">
        cart
        { cartList.map(item => <li key={item.id}>nombre: {item.name} precio: {item.price} cantidad:{item.quantity}</li>) }
        <button className="w-25" onClick={clearCart}>Vaciar Carrito</button>
      </div>
    )
}

export default Cart
