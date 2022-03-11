import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '../../imgs/icons/logo.svg'
import { CartWidget } from './CartWidget'
import {NavLink} from 'react-router-dom'

function NavBar () {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="100"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </NavLink>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/category/shoes">Calzado</NavLink>
                <NavLink to="/category/clothing">Indumentaria</NavLink>
                <NavLink to="/category/accesories">Accesorios</NavLink>
              </Nav>
              <Nav>
                <NavLink to="/cart">
                  <CartWidget/>
                </NavLink>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar