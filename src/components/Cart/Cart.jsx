import CartContextProvider, { useCartContext } from '../../context/CartContext'
import { addDoc, collection, documentId, getFirestore, query, getDocs, where, writeBatch} from "firebase/firestore"
import { useState } from "react"; 
import CartItem from './CartItem'
import shop from "../../imgs/icons/shop.svg"   
import summary from "../../imgs/icons/summary.svg"   
import success from "../../imgs/icons/success.jpg"   
import clear from "../../imgs/icons/clear.svg"   
import dai from "../../imgs/icons/dai.png"   
import emptyCart from "../../imgs/icons/emptyCart.svg"
import purchase from "../../imgs/icons/purchase.svg" 
import shopping from "../../imgs/icons/shopping.svg" 
import {Link} from 'react-router-dom'
import { useAuth } from "../../context/AuthContext";

export const Cart = () => {
    const {cartList, getSubtotalPrice, getTotalPrice, removeItemByID, clearCart, shipping, getTaxes, getFinalPrice} = useCartContext(CartContextProvider)
    const { currentUser } = useAuth()
    const [orderID, setOrderID] = useState(null)

    const createOrder = async (e) => {
        e.preventDefault() 
        let order = {}      
        order.email = currentUser.email
        order.total = getTotalPrice()
        order.items = cartList.map ( cartItem => {
            let id    = cartItem.id;
            let name  = cartItem.name;
            let price = getSubtotalPrice(cartItem);
            let quantity = cartItem.quantity

            return {id, name, price, quantity}
        })
        const db = getFirestore()
        const queryCollectionOrders = collection(db, 'orders')
        addDoc(queryCollectionOrders, order)
        .then(resp => setOrderID(resp.id))
        .catch(err => console.error(err))

      const queryCollection = collection(db, 'items')

      const queryUpdateStock = query(queryCollection, where( documentId() , 'in', cartList.map(it => it.id) ))

      const batch = writeBatch(db)

      await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
      }) ))

      batch.commit()
      clearCart()
    }


    return(
        <>
            {
                !orderID?
                    (
                        <>
                        
                            {
                                cartList.length?
                                    (
                                        <>
                                            <div className="row" >
                                                <div className="cart-header col-7" style={{margin:"0 2rem 0 2.9rem"}}>
                                                    <h1 style={{padding:"3rem 0 0 2.5rem", fontSize:"2.1rem", fontWeight:"bold", borderBottom:"2rem", color:"#F58A1F", textShadow: "1.2px 1px 0.5px gray"}}><img src={shop} alt="shop-bag" style={{height:"40px", paddingBottom:"0.4rem", paddingRight:"0.9rem"}}/>My purchase</h1>
                                                <>
                                                    {
                                                        cartList.map( (item) => (<CartItem item={item} removeItemByID={removeItemByID} getSubtotalPrice={getSubtotalPrice} key={item.id}/>) )
                                                    }
                                                </>
                                                </div>
                                                <div className="cart-summary col-3 text-center d-flex flex-column align-items-center mx-auto" style={{ marginTop:"3rem"}}>
                                                    <h2 style={{fontWeight:"bold", color:"#F58A1F", textShadow: "1.2px 1px 0.5px gray"}}> <img src={summary} alt="shop-bag" style={{height:"60px", paddingBottom:"0.4rem", paddingRight:"0.2rem"}}/>Summary</h2>
                                                    <div className="cart-summary-prices" style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px" ,marginTop:"0.4rem"}}>
                                                        <div className="d-flex justify-content-between" style={{padding:"0.4rem 2rem 0 2rem"}}>
                                                            <h3 style={{paddingTop:"1rem", fontSize:"1.2rem"}}>Subtotal:</h3>
                                                            <h3 style={{paddingTop:"1rem", fontSize:"1.2rem"}}>{getTotalPrice().toFixed(2)} <img src={dai} alt="coin" style={{height:"25px" , marginBottom:"0.3rem"}}/></h3>
                                                        </div>
                                                        <div className="d-flex justify-content-between" style={{padding:"0.4rem 2rem 0 2rem"}}>
                                                            <h3 style={{paddingTop:"1rem", fontSize:"1.2rem"}}>Shipping:</h3>
                                                            <h3 style={{paddingTop:"1rem", fontSize:"1.2rem"}}>{shipping.toFixed(2)} <img src={dai} alt="coin" style={{height:"25px" , marginBottom:"0.3rem"}}/></h3>
                                                        </div>
                                                        <div className="d-flex justify-content-between" style={{padding:"0.4rem 2rem 0 2rem"}}>
                                                            <h3 style={{paddingTop:"1rem", fontSize:"1.2rem"}}>Taxes:</h3>
                                                            <h3 style={{paddingTop:"1rem", fontSize:"1.2rem"}}>{getTaxes().toFixed(2)} <img src={dai} alt="coin" style={{height:"25px" , marginBottom:"0.3rem"}}/></h3>
                                                        </div>
                                                        <div className="d-flex justify-content-between" style={{padding:"0.4rem 2rem 0 2rem"}}>
                                                            <h3 style={{paddingTop:"1rem", fontSize:"1.2rem", fontWeight:"bold"}}>Total:</h3>
                                                            <h3 style={{paddingTop:"1rem", fontSize:"1.2rem", fontWeight:"bold"}}>{getFinalPrice().toFixed(2)} <img src={dai} alt="coin" style={{height:"25px" , marginBottom:"0.3rem"}}/></h3>
                                                        </div>
                                                        <button style={{all:"unset", marginTop:"1.2rem",cursor:"pointer",backgroundColor:"#CA0B00", width:"150px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}} onClick={clearCart}><span style={{ fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Empty Cart<img src={clear} alt="shop-bag" style={{height:"23px", paddingLeft:"0.3rem"}}/></span></button>
                                                        {
                                                            currentUser?
                                                            <Link to={"/form"} style={{textDecoration:'inherit', color:'inherit'}}>   
                                                                <button style={{all:"unset", marginTop:"1.8rem", marginBottom:"2rem", cursor:"pointer",backgroundColor:"#6AA303", width:"150px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}><span style={{ fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}} onClick={createOrder}>Purchase <img src={purchase} alt="shop-bag" style={{height:"23px", paddingLeft:"0.1rem"}}/></span></button>
                                                            </Link>
                                                            :
                                                            <Link to={"/login"} style={{textDecoration:'inherit', color:'inherit'}}>   
                                                                <button style={{all:"unset", marginTop:"1.8rem", marginBottom:"2rem", cursor:"pointer",backgroundColor:"#F58A1F", width:"150px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}><span style={{ fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Login</span></button>
                                                            </Link>
                                                        }
                        
                                                        </div>
                                                    </div>  
                                                </div>
                                        </>
                                    )
                                    :
                                    (<>
                                        <div className="cart-header-empty d-flex-column text-center" >
                                            <img src={emptyCart} alt="Cart empty" style={{height:"100px", paddingTop:"2rem"}}/>
                                            <h1 style={{paddingTop:"1rem", fontSize:"2.1rem", fontWeight:"bold", borderBottom:"2rem", color:"#000"}}>Cart is empty.</h1>
                                            <span style={{paddingTop:"1rem", fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem", color:"#000"}}>Looks like you have no items in your shopping cart</span>                            
                                        </div>
                                        <Link to={"/"} style={{textDecoration:'inherit', color:'inherit'}}>   
                                        <div className='text-center'>
                                            <button className="text-center mx-auto px-auto" style={{all:"unset", marginTop:"2rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"140px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}} ><span style={{ paddingLeft:"0.7rem", fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}> Buy Now<img src={shopping} alt="shop-bag" style={{height:"23px", paddingLeft:"0.6rem", paddingBottom:"0.2rem"}}/> </span></button>    
                                        </div>
                                        </Link>     
                                    </>)        
                            }
                        </>
                    )
                    :
                    (
                        <>
                        <div className="cart-header-empty d-flex-column text-center" >
                          <img src={success} alt="Purchase Successfull" style={{height:"200px", paddingTop:"2rem"}}/>
                          <h1 style={{paddingTop:"0.4rem", fontSize:"2.1rem", fontWeight:"bold", borderBottom:"2rem", color:"#000"}}>Your purchase was successful!</h1>
                          <h2 style={{paddingTop:"1rem", fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem", color:"#000"}}>Order ID: {orderID} </h2>                            
                          <Link to={"/"} style={{textDecoration:'inherit', color:'inherit'}}>   
                          <button className="text-center mx-auto px-auto" style={{all:"unset", marginTop:"1rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"100px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}>
                              <span style={{fontSize:"1.1rem", fontWeight:"bold", color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Done</span>
                          </button>    
                          </Link>     
                        </div>
                        </>    
                    )    
            }
        </>
    )
}

export default Cart