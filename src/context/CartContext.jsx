import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const isInCart = (id) => { return cartList.some( item => item.id === id ) }

    const clearCart = () => { setCartList ([]) }

    const removeItemByID = (id) => { 
      let index = cartList.map((item) => item.id).indexOf(id)
      setCartList([...cartList.splice(index,1)])
    }

    const getCurrentQuantity = (id) => { return cartList.find(item => item.id === id).quantity }

    const getAvailableStock = (item,id) => { return isInCart(item.id)? (item.stock - (cartList.find(item => item.id === id).quantity)) : (item.stock) }

    const updateQuantity = (item, quantity) =>{
      let currentQuantity = getCurrentQuantity(item.id)
      removeItemByID(item.id)
      if ( (quantity + currentQuantity) >= getAvailableStock(item,item.id) ){
        addItem(item, getAvailableStock(item,item.id))
      }
      else{
        addItem(item, quantity + currentQuantity)
      }
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
            getAvailableStock,
            updateQuantity,
            clearCart
          }}>
          {children}
        </CartContext.Provider>
      );
    
}


export default CartContextProvider