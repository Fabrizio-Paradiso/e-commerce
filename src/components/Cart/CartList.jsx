import CartItem from './CartItem'
import CartContextProvider, { useCartContext } from '../../context/CartContext'
export const CartList = ()  =>{
    const {cartList, removeItemByID, getSubtotalPrice} = useCartContext(CartContextProvider)
    return  (
            cartList.map( (item) => (<CartItem item={item} removeItemByID={removeItemByID} getSubtotalPrice={getSubtotalPrice} key={item.id}/>) )
        )
}

export default CartList