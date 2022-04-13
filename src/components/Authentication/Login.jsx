import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const LogIn = () => {
    const [dataForm, setDataForm] = useState({email:'', password:''})
    const [message, setMessage] = useState("")
    const { login, currentUser } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(dataForm.email, dataForm.password);
            // window.location ="/"
            console.log(currentUser.email)
          } catch (error) {
            console.log(error)
            setMessage('Wrong Credentials');
            setTimeout(() => setMessage(''), 1500);
          }
    }

    const handleOnChange = (e) => { setDataForm({...dataForm, [e.target.name] : e.target.value })}
    
    return (
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
                  <button type="submit" onClick = {handleSubmit} className="text-center mx-auto px-auto" style={{all:"unset", marginTop:"1rem", cursor:"pointer", backgroundColor:"#F58A1F", width:"100px", height:"30px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}}> <span style={{ fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}> Log In </span> </button>
              </form>
            </div>
      </>
    )
}

export default LogIn