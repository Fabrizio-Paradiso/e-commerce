import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import dai from "../../imgs/icons/dai.png"
import CartContextProvider, { useCartContext } from '../../context/CartContext'
import { useState } from 'react'
import {Link} from 'react-router-dom'


export const ItemDetail = ({item}) => {
  
  const [currentCart, setCurrentCart] = useState(0)
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
        
        <div className='item-detail-description d-flex-column col-4 text-center my-4' >
          <h2 className='text-dark text-start' style={{fontWeight:"bolder", fontSize:"1.6rem"}}> {item.name} </h2>
          <h5 className='text-start' style={{ paddingTop:"1.5rem", borderBottom: "1px solid rgb(212, 212, 212)"}}>Description</h5>
          <span className='d-flex text-start'> {item.description} </span>
          <span className='d-flex justify-content-start'style={{paddingTop:"1.5rem", fontWeight:"bold"}}>Price: {item.price}<img height={20} className="mx-2" alt="coin" src={dai} style={{marginBottom:"0.2rem"}}/></span>  
          <div className="d-flex-column text-start">
            {   
                !clickAdd?
                  <>
                    <ItemCount count={currentCart} availableStock = {item.stock} handleCount={setCurrentCart}/>
                    <span className='d-flex text-start' style={{color:"red", paddingTop:"1.5rem"}}> {item.stock} products in stock </span>
                    <button className="text-center mx-auto px-auto" style={{all:"unset", marginTop:"1.5rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"150px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}} disabled={!currentCart} onClick={handleAddItem}>
                      <span style={{fontSize:"1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Add to cart</span>
                    </button>
                  </>
                :
                    <>
                    <Link to={"/"} style={{textDecoration:'inherit', color:'inherit'}}>
                      <button className="text-center px-auto" style={{all:"unset", marginTop:"2rem", marginRight:"1.5rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"180px", height:"30px" , boxShadow: "0px 1px black",  border:"0.06rem black solid"}}>
                            <span style={{fontSize:"1rem", fontWeight:"bold", color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Continue Shopping</span>
                      </button>
                    </Link>
                    <Link to={"/cart"} style={{textDecoration:'inherit', color:'inherit'}}>            
                        <button className="text-center px-auto" style={{all:"unset", marginTop:"2rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"180px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}>
                          <span style={{fontSize:"1rem", fontWeight:"bold", color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Go to cart</span>
                        </button>
                    </Link>
                    </>
            }

        </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail