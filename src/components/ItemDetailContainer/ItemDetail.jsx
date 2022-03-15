import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import dai from "../../imgs/icons/dai.png"

export const ItemDetail = ({img,price,name,description,stock}) => {
  return (
    <>
        <div className='item-detail-container row align-items-center'>
          <div className='item-detail-image col-6 text-end my-4'>
            <img src={img} alt={name} style={{width: "300px", height: "330px" , padding:"10px", backgroundColor:"white", boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}/>  
          </div>
        
        <div className='item-detail-description d-flex-column col-3 text-center my-4' >
          <h2 className='text-dark' style={{fontWeight:"bolder"}}> {name} </h2>
          <span style={{marginLeft:'2px', fontWeight:"bold"}}>{price}<img height={15} className="mx-2" alt="coin" src={dai}/></span>  
          <span className='d-flex'> {description} </span>
          <ItemCount initial = {0} stock = {stock}/>
        </div>
      </div>
    </>
  )
}