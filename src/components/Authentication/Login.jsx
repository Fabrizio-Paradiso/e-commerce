import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import CartContextProvider, { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import success from "../../imgs/icons/success.jpg"   

const LogIn = () => {
    const [dataForm, setDataForm] = useState({email:'', password:''})
    const [message, setMessage] = useState("")
    const { login, currentUser } = useAuth()
    const {purchaseActive} = useCartContext(CartContextProvider)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(dataForm.email, dataForm.password)
            console.log(purchaseActive)
            purchaseActive ? <Link to="/cart" replace /> : <Link to="/" replace/>
          } catch (error) {
            console.log(error)
            setMessage('Wrong Credentials');
            setTimeout(() => setMessage(''), 1500);
          }
    }

    const handleOnChange = (e) => { setDataForm({...dataForm, [e.target.name] : e.target.value })}
    
    return (
            <>
                        {
                        !currentUser?
                          (
                            <>
                            <div className="row mx-auto py-5" style={{marginTop:'2.5rem', width:'600px', borderRadius: '10px! important', boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                              <h2 className="text-center" style={{fontSize:"1.9rem", fontWeight:"bold", borderBottom:"2rem", color:"#F58A1F", textShadow: "1.2px 1px 0.5px black"}} > Log In </h2>
                              <form className="row d-flex flex-column mx-auto col-lg-10" onSubmit = {handleSubmit} onChange={handleOnChange}>
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
                                <label htmlFor="password" className="label" style={{marginLeft:"1.7rem" , fontWeight:"bold"}}>Password</label>  
                                  <input
                                    className="mx-auto mt-1 mb-2 form-control"
                                    style={{width:"400px"}}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                  />
                                  {
                                    message!==''? <small style={{color:"red", paddingLeft:"2.5rem"}}>{message}</small> : null
                                  }                   
                                  <button button type="submit" onClick = {handleSubmit} className="text-center mx-auto px-auto" style={{all:"unset", marginTop:"1rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"100px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}> <span style={{ fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}> Log In </span> </button> 
                              </form>
                            </div>
                            </>   
                          )
                          :
                          (
                            <>
                            <div className="cart-header-empty d-flex-column text-center" >
                              <img src={success} alt="Purchase Successfull" style={{height:"200px", paddingTop:"2rem"}}/>
                              <h1 style={{paddingTop:"0.2rem", paddingBottom:"1rem", fontSize:"2.1rem", fontWeight:"bold", borderBottom:"2rem", color:"#000"}}>Login was successful!</h1>                            
                              <Link to={"/"} style={{textDecoration:'inherit', color:'inherit'}}>   
                                <button className="text-center  px-auto" style={{all:"unset", marginTop:"1rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"100px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}>
                                    <span style={{fontSize:"1.1rem", fontWeight:"bold", color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Go Home</span>
                                </button>    
                              </Link>     
                              <Link to={"/cart"} style={{textDecoration:'inherit', color:'inherit'}}>   
                                <button className="text-center px-auto" style={{all:"unset", marginLeft:"2rem", marginTop:"1rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"100px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}>
                                    <span style={{fontSize:"1.1rem", fontWeight:"bold", color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>Go Cart</span>
                                </button>    
                              </Link>     
                            </div>
                            </>   
                          )             
                      }
            </>
            
    )
}

export default LogIn

