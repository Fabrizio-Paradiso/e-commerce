import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const isInCart = (id) => { return cartList.some( item => item.id === id ) }

    const clearCart = () => { setCartList ([]) }

    const removeItemByID = (id) => {
      if(cartList.length>1){
        let index = cartList.map((item) => item.id).indexOf(id)
        setCartList([...cartList.splice(index,1)])
      }
      else{
        clearCart()
      } 
    }
    
    const getCurrentQuantity = (id) => { return cartList.find(item => item.id === id).quantity}

    const getSubtotalPrice = (item) => { return item.quantity*item.price  }

    const getTotalPrice = () => { return cartList.reduce( (sum, item) => sum + getSubtotalPrice(item),0) }

    const getCartQuantity = () => { return cartList.reduce( (sum, item) => sum + item.quantity,0) }

    const updateQuantity = (item, quantity) =>{
      let currentQuantity = getCurrentQuantity(item.id)
      removeItemByID(item.id)
      addItem(item, quantity + currentQuantity)
    }
    
    const addItem = (item, quantity) => {
        isInCart(item.id) ?
          updateQuantity(item,quantity)
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
            getCurrentQuantity,
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