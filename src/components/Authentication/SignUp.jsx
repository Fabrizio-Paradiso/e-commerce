 import { useState } from "react";
import validator from 'validator'
import { useAuth } from "../../context/AuthContext";
import {Link} from 'react-router-dom'
import success from "../../imgs/icons/success.jpg"  

const SignUp = () => {
    const [dataForm, setDataForm] = useState({email:'', password:'', checkPassword:''})
    const [message, setMessage] = useState("")
    const { login, signup, currentUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signup(dataForm.email, dataForm.password)
            await login(dataForm.email, dataForm.password)
        }
        catch(error){
            setMessage('Server Error, please try again');
            setTimeout(() => setMessage(''), 1500);
        } 
    }

    const handleOnChange = (e) => { setDataForm({...dataForm, [e.target.name] : e.target.value })}
    
    const validateInput = () => { return (dataForm.email.trim() && dataForm.password.trim() && dataForm.checkPassword.trim())? null : setMessage("Complete all fields")}

    const validateEmail = () => { return validator.isEmail(dataForm.email)? null : setMessage("Enter valid Email") }

    const validateCheckPassword = () => { return (dataForm.password === dataForm.checkPassword)? null : setMessage("Passwords do not match")}

    const checkValidations = () => { return(validateInput()===null  && validateEmail()===null && validateCheckPassword()===null )? true : false }

    const formValidation = (e) => {
      e.preventDefault()
      return checkValidations()? handleSubmit(e) : null 
    }

    return (
      <>
            {
              !currentUser?
                ( <div className="row mx-auto py-5" style={{marginTop:'2.5rem', width:'600px', borderRadius: '10px! important', boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                    <h2 className="text-center" style={{fontSize:"1.9rem", fontWeight:"bold", borderBottom:"2rem", color:"#F58A1F", textShadow: "1.2px 1px 0.5px black"}} > Register </h2>
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
                          <label htmlFor="password" className="label" style={{marginLeft:"1.7rem" , fontWeight:"bold"}}>Password (at least 8 characters)</label>  
                            <input
                              className="mx-auto mt-1 mb-2 form-control"
                              style={{width:"400px"}}
                              type="password"
                              name="password"
                              placeholder="Password"
                              required
                            />
                          <label htmlFor="password" className="label" style={{marginLeft:"1.7rem" , fontWeight:"bold"}}>Repeat Password  (at least 8 characters)</label>  
                            <input
                              className="mx-auto mt-1 mb-2 form-control"
                              style={{width:"400px"}}
                              type="password"
                              name="checkPassword"
                              placeholder="Repeat Password"
                              required
                            />
                            {
                              message!==''? <small style={{color:"red", paddingLeft:"2.5rem"}}>{message}</small> : null
                            }               
                        <button type="submit" onClick = {formValidation} className="text-center mx-auto px-auto" style={{all:"unset", marginTop:"1rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"150px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}> <span style={{ fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}> Sign Up </span> </button>
                    </form>
                  </div>)
                :
                (
                  <>
                  <div className="cart-header-empty d-flex-column text-center" >
                    <img src={success} alt="Login Successfull" style={{height:"200px", paddingTop:"2rem"}}/>
                    <h1 style={{paddingTop:"0.2rem", paddingBottom:"1rem", fontSize:"2.1rem", fontWeight:"bold", borderBottom:"2rem", color:"#000"}}>Sign Up was successful!</h1>                            
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

export default SignUp