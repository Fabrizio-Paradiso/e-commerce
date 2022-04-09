import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../imgs/icons/logo.svg'
import { CartWidget } from './CartWidget'
import {NavLink} from 'react-router-dom'
import CartContextProvider, { useCartContext } from '../../context/CartContext'

function NavBar () {
    const { cartList } = useCartContext(CartContextProvider)
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