import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const isInCart = (id) => { return cartList.some( item => item.id === id ) }

    const clearCart = () => { setCartList ([]) }

    const removeItemByID = (id) => { setCartList ( cartList.filter ( (item) => item.id !== id) )}

    const getSubtotalPrice = (item) => { return item.quantity*item.price  }

    const getTotalPrice = () => { return cartList.reduce( (sum, item) => sum + getSubtotalPrice(item),0) }

    const getCartQuantity = () => { return cartList.reduce( (sum, item) => sum + item.quantity,0) }

    const updateQuantity = (id, quantity) =>{ cartList.find(item => item.id === id).quantity += quantity }
    
    const addItem = (item, quantity) => {
        isInCart(item.id) ?
          updateQuantity(item.id,quantity)
          :
          setCartList([...cartList, {...item, quantity:quantity}])
    }

    return (
        <CartContext.Provider
          value={{
            cartList,
            isInCart,
            addItem,
            removeItemByID,
            getSubtotalPrice,
            getTotalPrice,
            getCartQuantity,
            updateQuantity,
            clearCart
          }}>
          {children}
        </CartContext.Provider>
      );
    
}


export default CartContextProvider