import dai from '../../imgs/icons/dai.png'
import deleteButton from '../../imgs/icons/deleteButton.svg'

function Cart({item, getSubtotalPrice, removeItemByID}) {
    return (
      <>
        <div className='cart-products-title row mt-4 mx-5 align-items-center text-center'>
          <span className="col-5 text-start" style={{paddingLeft:"4.6rem"}}><img src={item.img} alt={item.name} style={{height:"80px", paddingRight:"4rem"}} />{item.name}</span>
          <span className="col-2">{item.price} <img src={dai} alt="coin" style={{height:"20px"}}/></span>
          <span className="col-1">{item.quantity}</span>
          <span className="col-2" >{getSubtotalPrice(item)} <img src={dai} alt="coin" style={{height:"20px"}}/></span>
          <button style={{marginLeft:"20px", all:"unset", cursor:"pointer"}} onClick={() => removeItemByID(parseInt(item.id))}> <img style={{width:"100%", height:"30px", marginRight:"1.4rem"}} src={deleteButton} alt="delete" /> </button> 
        </div>
      </>
    )
}

export default Cart
