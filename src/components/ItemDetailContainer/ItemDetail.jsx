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
          <div className='item-detail-image col-6 text-end my-4'>
            <img src={item.img} alt={item.name} style={{width: "500px", height: "510px" , padding:"100px", backgroundColor:"white", boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}/>  
          </div>
        
        <div className='item-detail-description d-flex-column col-3 text-center my-4' >
          <h2 className='text-dark' style={{fontWeight:"bolder"}}> {item.name} </h2>
          <span className='py-2' style={{marginLeft:'2px', fontWeight:"bold"}}>{item.price}<img height={20} className="mx-2" alt="coin" src={dai} style={{marginBottom:"0.2rem"}}/></span>  
          <span className='d-flex py-4'> {item.description} </span>
          <ItemCount count={currentCart} availableStock = {item.stock} handleCount={setCurrentCart}/>
          <div className="d-flex-column text-center">
            {   
                !clickAdd?
                    <button className="text-center mx-auto px-auto" style={{all:"unset", marginTop:"2rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"150px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}} disabled={!currentCart} onClick={handleAddItem}>
                      <span style={{fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Add to cart</span>
                    </button>
                :
                    <>
                    <Link to={"/"} style={{textDecoration:'inherit', color:'inherit'}}>
                      <button className="text-center mx-2 px-auto" style={{all:"unset", marginTop:"2rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"150px", height:"30px" , boxShadow: "0px 1px black",  border:"0.06rem black solid"}}>
                            <span style={{fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Keep Shopping</span>
                      </button>
                    </Link>
                    <Link to={"/cart"} style={{textDecoration:'inherit', color:'inherit'}}>            
                        <button className="text-center mx-2 px-auto" style={{all:"unset", marginTop:"2rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"150px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}>
                          <span style={{fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem", color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Buy finish</span>
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