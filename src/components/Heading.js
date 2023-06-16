import { Navbar, NavDropdown, Container, Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ImageHeading from "./../images/cebes-kitchen.jpg";
const Heading = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CEBE'S KITCHEN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#locaTion">Location</Nav.Link>

              <NavDropdown title="MENU" id="basic-nav-dropdown">
                <NavDropdown.Item href="#siSig">Sisig</NavDropdown.Item>
                <NavDropdown.Item href="#mainCourse">
                  Main Course
                </NavDropdown.Item>
                <NavDropdown.Item href="#soUp">soup</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#nooDles">Noodles</NavDropdown.Item>
                <NavDropdown.Item href="#valueMeal">
                  Value Meal
                </NavDropdown.Item>
                <NavDropdown.Item href="#chopSuey">Chopsuey</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img src={ImageHeading} className="w-100" alt="" />
    </div>
  );
};

export default Heading;
