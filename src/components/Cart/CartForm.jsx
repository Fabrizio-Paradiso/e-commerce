import { addDoc, collection, documentId, getFirestore, query, getDocs, where, writeBatch} from "firebase/firestore"   
import { useState } from "react";
import CartContextProvider, { useCartContext } from '../../context/CartContext'
import validator from 'validator'
import { Link } from "react-router-dom"
import success from "../../imgs/icons/success.jpg"

const CartForm = () => {
    const [dataForm, setDataForm] = useState({name:'', phone:'', email:'', emailCheck:''})
    const [message, setMessage] = useState("")
    const {cartList, getSubtotalPrice, getTotalPrice} = useCartContext(CartContextProvider)
    const [orderID, setOrderID] = useState(null)

    const createOrder = async (e) => {
        e.preventDefault() 
        let order = {}      
        order.buyer = dataForm
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
    }

    const handleOnChange = (e) => { setDataForm({...dataForm, [e.target.name] : e.target.value })}

    const validatePhone = () => { return validator.isNumeric((dataForm.phone))?  null : setMessage("Please enter only numbers") }
    
    const validateInput = () => { return (dataForm.name.trim() && dataForm.phone.trim() && dataForm.email.trim() && dataForm.emailCheck.trim())? null : setMessage("Complete all fields")}

    const validateEmail = () => { return validator.isEmail(dataForm.email)? null : setMessage("Enter valid Email") }

    const validateEmailCheck = () => { return (dataForm.email === dataForm.emailCheck)? null : setMessage("Check Email is not correct")}

    const checkValidations = () => { return(validateInput()===null  && validatePhone()===null && validateEmail()===null && validateEmailCheck()===null )? true : false }

    const formValidation = (e) => {
      e.preventDefault()
      return checkValidations()? createOrder(e) : null 
    }

    return (
      <>
        {
          !orderID?
            <div className="row mx-auto py-5" style={{marginTop:'2.5rem', width:'600px', height:'500px', borderRadius: '10px! important', boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <h2 className="text-center" style={{fontSize:"1.9rem", fontWeight:"bold", borderBottom:"2rem", color:"#F58A1F", textShadow: "1.2px 1px 0.5px black"}} > Purchase Form </h2>
              <form className="row d-flex flex-column mx-auto col-lg-10 mt-3" onSubmit = {createOrder} onChange={handleOnChange}>
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
                        message!==''? <small style={{color:"red", paddingLeft:"2.5rem"}}>{message}</small> : null
                      }               
                  <button type="submit" onClick = {formValidation} className="text-center mx-auto px-auto" style={{all:"unset", marginTop:"1rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"150px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}> <span style={{ fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}> Submit Order </span> </button>
              </form>
            </div>
          :
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
        }
      </>
    )
}

export default CartForm