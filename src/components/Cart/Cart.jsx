import CartContextProvider, { useCartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import shop from "../../imgs/icons/shop.svg"   
import clear from "../../imgs/icons/clear.svg"   


export const Cart = () => {
    const {cartList, getSubtotalPrice, removeItemByID, clearCart} = useCartContext(CartContextProvider)
    return(
        <div>
            <div className="cart-header" style={{margin:"0 2rem 0 2.9rem", width:"90%", borderBottom:"1px solid gray", borderWidth:"1px", boxShadow: "0px 1px gray"}}>
                <h1 style={{padding:"3rem 0 0 2.5rem", fontSize:"2.1rem", fontWeight:"bold", borderBottom:"2rem", color:"#F58A1F", textShadow: "1.2px 1px 0.5px gray"}}><img src={shop} alt="shop-bag" style={{height:"40px", paddingBottom:"0.4rem", paddingRight:"0.9rem"}}/>My purchase</h1>
            </div>
            <div className='cart-products-title row mt-4 mx-5 text-center' >
                <h5 className="col-5 text-start" style={{fontWeight:"bolder", paddingLeft:"5.3rem"}}>Product</h5>
                <h5 className="col-2" style={{fontWeight:"bolder"}}>Price</h5>
                <h5 className="col-1" style={{fontWeight:"bolder"}}>Quantity</h5>
                <h5 className="col-2" style={{fontWeight:"bolder"}}>Subtotal</h5>
            </div>
            <>
                {
                    cartList.map( (item) => (<CartItem item={item} removeItemByID={removeItemByID} getSubtotalPrice={getSubtotalPrice} key={item.id}/>) )
                }
            </>
            <div className="cart-header" style={{margin:"0 2rem 0 2.9rem"}}>
            <button style={{all:"unset", margin:"3rem 0 0 2.5rem",cursor:"pointer",backgroundColor:"#F58A1F", width:"150px", height:"30px" , boxShadow: "0px 1px gray"}} onClick={clearCart}><span style={{ paddingLeft:"0.7rem", fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px gray"}}> Empty Cart<img src={clear} alt="shop-bag" style={{height:"23px", paddingLeft:"0.3rem"}}/></span></button>
            </div>
        </div>
    )
}

export default Cart