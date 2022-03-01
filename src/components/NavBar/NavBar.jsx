import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '../../imgs/icons/logo.svg'
import { CartWidget } from './CartWidget'

function NavBar () {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#shoes">Calzado</Nav.Link>
                <Nav.Link href="#clothing">Indumentaria</Nav.Link>
                <Nav.Link href="#accesories">Accesorios</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#cart">
                  <CartWidget/>
                </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar