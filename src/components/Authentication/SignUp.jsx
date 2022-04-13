 import { useState } from "react";
import validator from 'validator'
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
    const [dataForm, setDataForm] = useState({email:'', password:'', checkPassword:''})
    const [message, setMessage] = useState("")
    const { signup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signup(dataForm.email, dataForm.password)
        }
        catch(error){
            setMessage('Server Error');
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
            <div className="row mx-auto py-5" style={{marginTop:'2.5rem', width:'600px', borderRadius: '10px! important', boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
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
                    <label htmlFor="password" className="label" style={{marginLeft:"1.7rem" , fontWeight:"bold"}}>Password</label>  
                      <input
                        className="mx-auto mt-1 mb-2 form-control"
                        style={{width:"400px"}}
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    <label htmlFor="password" className="label" style={{marginLeft:"1.7rem" , fontWeight:"bold"}}>Repeat Password</label>  
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
            </div>
      </>
    )
}

export default SignUp