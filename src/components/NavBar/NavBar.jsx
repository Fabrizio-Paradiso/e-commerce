import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '../../imgs/icons/logo.svg'
import { CartWidget } from './CartWidget'
import {NavLink} from 'react-router-dom'

function NavBar () {
    return (
      <Navbar collapseOnSelect expand="lg" style={{backgroundImage:"url('https://www.digitalsport.com.ar/files/stores/skin_fluid.png')", boxShadow:"0 5px 2px -2px #9c9c9c"}}>
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="100"
                height="50"
                className="d-inline-block align-top text-start"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </NavLink>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto text-center">
                <NavLink to="/category/shoes"  style={{textDecoration:'inherit', color:'#f58a1f', fontWeight:"bolder", padding:"0px 10px 0px 10px"}}>Calzado</NavLink>
                <NavLink to="/category/clothing" style={{textDecoration:'inherit', color:'#f58a1f', fontWeight:"bolder", padding:"0px 10px 0px 10px"}} >Indumentaria</NavLink>
                <NavLink to="/category/accesories" style={{textDecoration:'inherit', color:'#f58a1f', fontWeight:"bolder", padding:"0px 10px 0px 10px"}} >Accesorios</NavLink>
              </Nav>
              <Nav>
                <NavLink to="/cart" className="d-none d-md-block">
                  <CartWidget/>
                </NavLink>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar