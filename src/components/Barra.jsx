import { Container, Nav, Navbar, Form, FormControl, Button  } from 'react-bootstrap';
import CartWidget from './CartWidget';



function Barra() {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#"><img
        src="./logo.png"
        width="110"
        height="70"
        className="d-inline-block align-top"
        alt=""
      /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Adquiera su Mercedez</Nav.Link>
          <Nav.Link href="#action2">Vehiculos</Nav.Link>
          <Nav.Link href="#">
            Servicio al Cliente
          </Nav.Link>
        
        </Nav>
        <CartWidget />
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Ingrese su busqueda"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Barra