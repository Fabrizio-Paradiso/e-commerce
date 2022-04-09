import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import dai from "../../imgs/icons/dai.png"
import addToCart from "../../imgs/icons/addToCart.svg"
import shopping from "../../imgs/icons/shopping.svg"
import CartContextProvider, { useCartContext } from '../../context/CartContext'
import { useState } from 'react'
import {Link} from 'react-router-dom'


export const ItemDetail = ({item}) => {
  
  const [currentCart, setCurrentCart] = useState(1)
  const [clickAdd, setClickAdd] = useState(false)
  const { addItem } = useCartContext(CartContextProvider)

  const handleAddItem = () => {
    addItem(item,currentCart)
    setClickAdd(true)
  }
  
  return (
    <>
        <div className='item-detail-container row align-items-top'>
          <div className='item-detail-image col-6 text-end'>
            <img src={item.img} alt={item.name} style={{width: "400px", height: "400px" , padding:"50px", backgroundColor:"white"}}/>  
          </div>
        
        <div className='item-detail-description d-flex-column col-4 text-center my-1' >
          <h1 className='text-dark text-start' style={{fontWeight:"bolder", fontSize:"2.3rem"}}> {item.name} </h1>
          <h2 className='d-flex justify-content-start'style={{paddingTop:"0.2rem", fontSize:"1.7rem" , fontWeight:"bold", color:"black" , textShadow: "1.2px 1px 0.5px white"}}>{item.price}<img height={30} className="mx-2" alt="coin" src={dai} style={{marginTop:"0.1rem"}}/></h2>
          <h3 className='d-flex text-start' style={{color:"black", fontSize:"1.1rem", paddingTop:"0.2rem"}}> Stock ({item.stock}) units </h3>

          <div className="d-flex-column text-start">
            {   
                !clickAdd?
                  <div className='d-flex' style={{marginTop:"0.1rem"}}>
                    <ItemCount count={currentCart} availableStock = {item.stock} handleCount={setCurrentCart}/>
                    <button className="text-center px-auto justify-content-start" style={{all:"unset", margin:"1.5rem 1rem 0 1rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"120px", boxShadow: "0px 1px black", border:"0.06rem black solid"}} disabled={!currentCart} onClick={handleAddItem}>
                      <span style={{fontSize:"1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Add to cart <img src={addToCart} alt="shop-bag" style={{height:"20px"}} ></img></span>
                    </button>
                  </div>
                :
                    <div className='d-flex' style={{paddingTop:"0.1rem"}}>
                    <Link to={"/"} style={{textDecoration:'inherit', color:'inherit'}}>
                      <button className="text-center px-auto" style={{all:"unset", marginTop:"1rem", marginRight:"1.5rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"200px", boxShadow: "0px 1px black",  border:"0.06rem black solid"}}>
                            <span style={{fontSize:"1rem", fontWeight:"bold", color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Continue Shopping <img src={shopping} alt="shop-bag" style={{height:"22px", paddingBottom:"0.2rem"}} ></img> </span>
                      </button>
                    </Link>
                    <Link to={"/cart"} style={{textDecoration:'inherit', color:'inherit'}}>            
                        <button className="text-center px-auto" style={{all:"unset", marginTop:"1rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"160px", boxShadow: "0px 1px black", border:"0.06rem black solid"}}>
                          <span style={{fontSize:"1rem", fontWeight:"bold", color:"#fff", textShadow: "1.2px 1px 0.5px black"}}> Shopping Cart <img src={addToCart} alt="shop-bag" style={{height:"20px"}} ></img> </span>
                        </button>
                    </Link>
                    </div>
            }

        </div>

          <h5 className='text-start' style={{ paddingTop:"1.2rem", borderBottom: "1px solid rgb(212, 212, 212)"}}>Description</h5>
          <span className='d-flex text-start'> {item.description} </span>

        </div>
      </div>
    </>
  )
}

export default ItemDetail