import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hardware PC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/chat">Chat</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">

              <NavDropdown.Item href="/products/memorias">
                Memorias RAM
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/procesadores">
                Microprocesadores
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/placas">
                Placas de video
              </NavDropdown.Item>
              
            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;