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

    const getAvailableStock = (item) => { return isInCart(item.id)? (item.stock - (getCurrentQuantity(item.id))) : (item.stock) }

    const getSubtotalPrice = (item) => { return item.quantity*item.price  }

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
            getSubtotalPrice,
            updateQuantity,
            clearCart
          }}>
          {children}
        </CartContext.Provider>
      );
    
}


export default CartContextProvider