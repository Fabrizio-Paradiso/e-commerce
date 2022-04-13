import dai from '../../imgs/icons/dai.png'
import deleteButton from '../../imgs/icons/deleteButton.svg'

function Cart({item, getSubtotalPrice, removeItemByID}) {
    return (
      <>
        <div className='cart-products-title d-flex text-center align-items-center px-auto' style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px", margin:"2rem", width:"100%", height:"150px"}} >
          <img src={item.img} alt={item.name} className='px-auto' style={{height:"150px", width:'150px', marginLeft:"2rem", paddingRight:"0.2rem", padding:"1rem"}} />
          <div className="d-flex flex-column my-auto text-center mx-auto px-auto">
            <h3 style={{paddingTop:"0.5rem",fontWeight:"bold", fontSize:"1.3rem"}}>Product</h3>
            <span style={{fontSize:"1rem"}}>{item.name}</span>
          </div>
          <div className="d-flex flex-column my-auto text-center mx-auto">
            <h3 style={{paddingTop:"0.5rem",fontWeight:"bold", fontSize:"1.3rem"}}>Quantity</h3>
            <span style={{fontSize:"1rem"}}>{item.quantity} item/s</span>
          </div>
          <div className="d-flex flex-column my-auto text-center mx-auto">
          <h3 style={{paddingTop:"0.5rem",fontWeight:"bold", fontSize:"1.3rem"}}>Total</h3>
            <span className='text-center' style={{fontSize:"1rem"}}>{getSubtotalPrice(item)} <img src={dai} alt="coin" style={{height:"20px", marginBottom:"0.2rem"}}/></span>
          </div>
            <button className='mx-auto' style={{all:"unset", cursor:"pointer"}} onClick={() => removeItemByID(item.id)}> <img style={{width:"100%", height:"25px"}} src={deleteButton} alt="delete" /> </button> 
        </div>
      </>
    )
}

export default Cart
