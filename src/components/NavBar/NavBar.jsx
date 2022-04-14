import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../imgs/icons/logo.svg'
import { CartWidget } from './CartWidget'
import {NavLink} from 'react-router-dom'
import CartContextProvider, { useCartContext } from '../../context/CartContext'
import { useAuth } from "../../context/AuthContext";

function NavBar () {
    const { cartList } = useCartContext(CartContextProvider)
    const { logout, currentUser } = useAuth()
    return (
      <Navbar collapseOnSelect expand="lg" style={{backgroundImage:"url('https://www.digitalsport.com.ar/files/stores/skin_fluid.png')", backgroundSize:"cover", boxShadow:"0 5px 2px -2px #9c9c9c"}}>          
        <NavLink to="/">
            <Navbar.Brand >
              <img
                src={logo}
                width="100"
                height="50"
                style={{display:"inline-block", position:"relative", float:"left", marginLeft:"3rem"}}
                alt="Rosario Store logo"
              />
            </Navbar.Brand>
          </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto text-center">
              <NavLink to="/category/accesories" style={{textDecoration:'inherit', color:'#f58a1f', fontWeight:"bolder", padding:"0 2rem 0 2rem", textShadow: "1.2px 1px 0.5px black"}} >Accesories</NavLink>
              <NavLink to="/category/clothing" style={{textDecoration:'inherit', color:'#f58a1f', fontWeight:"bolder", padding:"0 2rem 0 2rem", textShadow: "1.2px 1px 0.5px black"}} >Clothing</NavLink>
              <NavLink to="/category/shoes"  style={{textDecoration:'inherit', color:'#f58a1f', fontWeight:"bolder", padding:"0 2rem 0 2rem", textShadow: "1.2px 1px 0.5px black"}}>Shoes</NavLink>
            </Nav>
            {
              !currentUser?
                <NavLink to="/login"  style={{textDecoration:'inherit', color:'#f58a1f', fontWeight:"bolder", padding:"0 2rem 0 2rem", textShadow: "1.2px 1px 0.5px black"}}>Login</NavLink>
                :              
                <NavLink to="/"  style={{textDecoration:'inherit', color:'#f58a1f', fontWeight:"bolder", marginTop:"0.22rem", padding:"0 2rem 0 2rem", textShadow: "1.2px 1px 0.5px black"}} onClick={logout}> 
                  <svg stroke="currentColor" fill="currentColor" filter= "drop-shadow(1.2px 1px 0.5px black)" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="2em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:"0.35rem", marginLeft:"0.2rem"}}><path d="M9 11.041v-0.825c1.102-0.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"></path></svg> 
                  <span> Log Out </span>
                </NavLink>
            }
            
            <NavLink to="/signup"  style={{textDecoration:'inherit', color:'#f58a1f', fontWeight:"bolder", padding:"0 2rem 0 2rem", textShadow: "1.2px 1px 0.5px black"}}>Sign Up</NavLink>
            <Nav>
              <NavLink to="/cart" className="d-none d-md-block">
                <>
                  {
                    cartList.length?
                      <CartWidget/>
                      :
                      null
                  }
                </>
              </NavLink>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar