import CartContextProvider, { useCartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import shop from "../../imgs/icons/shop.svg"   
import clear from "../../imgs/icons/clear.svg"   
import dai from "../../imgs/icons/dai.png"   
import emptyCart from "../../imgs/icons/emptyCart.svg"
import purchase from "../../imgs/icons/purchase.svg" 
import shopping from "../../imgs/icons/shopping.svg" 
import {Link} from 'react-router-dom'

export const Cart = () => {
    const {cartList, getSubtotalPrice, getTotalPrice, removeItemByID, clearCart} = useCartContext(CartContextProvider)

    return(
        <>
            {
                cartList.length?
                    <>
                        <div className="cart-header" style={{margin:"0 2rem 0 2.9rem", width:"85%", borderBottom:"1px solid gray", borderWidth:"1px", boxShadow: "0px 1px gray"}}>
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
                        <div className="cart-footer d-flex justify-content-between align-items-center" style={{margin:"0 2rem 0 2.9rem"}}>
                            <button style={{all:"unset", margin:"3rem 0 0 2.5rem",cursor:"pointer",backgroundColor:"#CA0B00", width:"150px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}} onClick={clearCart}><span style={{ paddingLeft:"0.7rem", fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Empty Cart<img src={clear} alt="shop-bag" style={{height:"23px", paddingLeft:"0.3rem"}}/></span></button>
                            <h3 style={{marginTop:"3rem", marginRight:"12rem", fontSize:"1.5rem", fontWeight:"bold"}}>Total Price: {getTotalPrice()} <img src={dai} alt="coin" style={{height:"25px" , marginBottom:"0.3rem"}}/> </h3>
                        </div>
                        <Link to={"/form"} style={{textDecoration:'inherit', color:'inherit'}}>   
                            <button style={{all:"unset", margin:"1.8rem 0 3rem 5.4rem",cursor:"pointer",backgroundColor:"#6AA303", width:"220px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}><span style={{ paddingLeft:"0.7rem", fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Continue Purchase <img src={purchase} alt="shop-bag" style={{height:"23px", paddingLeft:"0.3rem"}}/></span></button>
                        </Link>  
                    </>
                    :
                    <>
                        <div className="cart-header-empty d-flex-column text-center" >
                            <img src={emptyCart} alt="Cart empty" style={{height:"100px", paddingTop:"2rem"}}/>
                            <h1 style={{paddingTop:"1rem", fontSize:"2.1rem", fontWeight:"bold", borderBottom:"2rem", color:"#000"}}>Cart is empty.</h1>
                            <span style={{paddingTop:"1rem", fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem", color:"#000"}}>Looks like you have no items in your shopping cart</span>                            
                        </div>
                        <Link to={"/"} style={{textDecoration:'inherit', color:'inherit'}}>   
                        <div className='text-center'>
                            <button className="text-center mx-auto px-auto" style={{all:"unset", marginTop:"2rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"140px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}} onClick={clearCart}><span style={{ paddingLeft:"0.7rem", fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}> Buy Now<img src={shopping} alt="shop-bag" style={{height:"23px", paddingLeft:"0.6rem", paddingBottom:"0.2rem"}}/> </span></button>    
                        </div>
                        </Link>     
                    </>        
            }
        </>
    )
}

export default Cart