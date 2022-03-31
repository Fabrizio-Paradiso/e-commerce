import { addDoc, collection, getFirestore} from "firebase/firestore"   
import { useState } from "react";
import CartContextProvider, { useCartContext } from '../../context/CartContext'

const CartForm = () => {
    const [dataForm, setDataForm] = useState({name:'', phone:'', email:'', emailCheck:''})
    const [message, setMessage] = useState("")
    const {cartList, getSubtotalPrice, getTotalPrice} = useCartContext(CartContextProvider)

    const createOrder = async (e) => {
        e.preventDefault() 
        let order = {}      
        order.buyer = dataForm
        order.total = getTotalPrice()
        order.items = cartList.map ( cartItem => {
            let id    = cartItem.id;
            let name  = cartItem.name;
            let price = getSubtotalPrice(cartItem);

            return {id, name, price}
        })
        const db = getFirestore()
        const queryCollectionOrders = collection(db, 'orders')
        addDoc(queryCollectionOrders, order)
        .then(resp =>{
            alert(`Your Order ID: ${resp.id}`);
            window.location ="/"
        })
        .catch(err => console.error(err))
    }

    const handleOnChange = (e) => { setDataForm({...dataForm, [e.target.name] : e.target.value })}

    const emailValidation = (e) => {
      e.preventDefault() 
      dataForm.email === dataForm.emailCheck?  createOrder(e) : setMessage("Check Email is not correct")
    }

    return (
        <>
        <div className="row mx-auto py-5" style={{marginTop:'2.5rem', width:'600px', height:'500px', borderRadius: '10px! important', boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
          <h2 className="text-center" style={{fontSize:"1.9rem", fontWeight:"bold", borderBottom:"2rem", color:"#F58A1F", textShadow: "1.2px 1px 0.5px black"}} > Purchase Form </h2>
          <form className="row mx-auto col-lg-10 mt-3" onSubmit = {createOrder} onChange={handleOnChange}>
            <div className="d-flex flex-column">
            <label htmlFor="name" className="label" style={{marginLeft:"1.7rem" , fontWeight:"bold"}}>Name</label>
                <input
                  className="mx-auto mt-1 mb-2 form-control"
                  style={{width:"400px"}}
                  type="text"
                  id="name"
                  name="name"
                  value={dataForm.name}
                  placeholder="Name"
                  required
                  pattern="[A-Za-z]{1,32}"
                />
                <label htmlFor="phone" className="label" style={{marginLeft:"1.7rem" , fontWeight:"bold"}}>Phone Number</label>
                <input
                  className="mx-auto mt-1 mb-2 form-control"
                  style={{width:"400px"}}
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  required
                  pattern="[0-9]*"
                />
                <label htmlFor="email" className="label" style={{marginLeft:"1.7rem" , fontWeight:"bold"}}>Email</label>
                  <input
                    className="mx-auto mt-1 mb-2 form-control"
                    style={{width:"400px"}}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="user@example.com"
                    required
                  />            
                <label htmlFor="email" className="label" style={{marginLeft:"1.7rem" , fontWeight:"bold"}}>Repeat Email</label>  
                  <input
                    className="mx-auto mt-1 mb-2 form-control"
                    style={{width:"400px"}}
                    type="email"
                    name="emailCheck"
                    placeholder="user@example.com"
                    required
                  />
                  {
                    message!==''? <small style={{color:"red", paddingLeft:"2rem"}}>{message}</small> : null
                  }               
              <button type="submit" onClick = {emailValidation} className="text-center mx-auto px-auto" style={{all:"unset", marginTop:"1rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"150px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}> <span style={{ fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}> Submit Order </span> </button>
            </div>
          </form>
        </div>
        </>
    )
}

export default CartForm