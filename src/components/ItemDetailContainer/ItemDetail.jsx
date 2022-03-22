import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import dai from "../../imgs/icons/dai.png"
import CartContextProvider, { useCartContext } from '../../context/CartContext'
import { useState } from 'react'
import { Button,Text } from "@chakra-ui/react";
import {Link} from 'react-router-dom'

export const ItemDetail = ({item}) => {
  
  const [currentCart, setCurrentCart] = useState(0)
  const [clickAdd, setClickAdd] = useState(false)
  const { addItem, getAvailableStock } = useCartContext(CartContextProvider)

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
          <span style={{marginLeft:'2px', fontWeight:"bold"}}>{item.price}<img height={15} className="mx-2" alt="coin" src={dai}/></span>  
          <span className='d-flex'> {item.description} </span>
          <ItemCount count={currentCart} availableStock = {item.stock} handleCount={setCurrentCart}/>
          <div className="d-flex-column text-center">
          <Text py="1" color="red">Only {getAvailableStock(item,item.id)} in stock </Text>
            {   
                !clickAdd?
                    <Button borderColor="black" borderRadius="3" bg="black" boxShadow="sm" mx="15" color="white" height="30" textAlign="center" disabled={!currentCart} onClick={handleAddItem}>
                        Add to cart
                    </Button>
                :
                    <>
                    <Link to={"/"} style={{textDecoration:'inherit', color:'inherit'}}>
                        <Button borderColor="black" borderRadius="3" bg="black" boxShadow="sm" mx="15" color="white" height="30" textAlign="center" >
                            Keep Shopping
                        </Button>
                    </Link>
                    <Link to={"/cart"} style={{textDecoration:'inherit', color:'inherit'}}>            
                        <Button borderColor="black" borderRadius="3" bg="black" boxShadow="sm" mx="15" color="white" height="30" textAlign="center">
                            Buy Finish
                        </Button>
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