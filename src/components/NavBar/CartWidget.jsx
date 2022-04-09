import cart from '../../imgs/icons/cart.svg'
import { Badge } from '@chakra-ui/react'
import CartContextProvider, { useCartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const { cartQuantity } = useCartContext(CartContextProvider);
    
    return (
            <div style={{marginRight:"3rem"}}>
              <img
                width="60px"
                height="35px"
                src= {cart}
                target="_blank" 
                alt="CartIcon"
              >
              </img>
              <Badge className="text-center" style={{color:"#fff", backgroundColor:"#F58A1F", borderRadius:"8rem", borderColor:"black", width:"22px", height:"22px", fontSize:"0.9rem",  marginBottom:"1rem", marginLeft:"-0.6rem", textShadow: "1.2px 1px 0.5px black",  filter:"drop-shadow(1.2px 1px 0.5px black"}}> <span className='text-center'>{cartQuantity}</span> </Badge>  
            </div>
    )
  }

  