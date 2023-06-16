import { Container, Row, Button } from "react-bootstrap";
import MenuList from "./MenuList";
import MenuItem from "./../images/MainCourse/buffaloWings.jpg";
import MenuItem1 from "./../images/MainCourse/lechonKawali.jpg";
import MenuItem2 from "./../images/MainCourse/calamaris.jpg";
import MenuItem3 from "./../images/MainCourse/sweetChili.jpg";
import MenuItem4 from "./../images/MainCourse/kinilaw.jpg";
import MenuItem5 from "./../images/MainCourse/saltedEgg.jpg";
import MenuItem6 from "./../images/MainCourse/sinuglaw.jpg";
import MenuItem7 from "./../images/MainCourse/ButteredChicken.jpg";
import MenuItem8 from "./../images/MainCourse/spicyWings.jpg";

const Menu = () => {
  return (
    <div id="MainCourse" className="bg-dark text-light">
      <br />
      <h1>Main Course</h1>
      <Container>
        <Button variant="outline-light" href="#home">
          Home
        </Button>
        <br /> <br />
        <Row className="g-3">
          <MenuList image={MenuItem} title="Buffalo Wings" />
          <MenuList image={MenuItem1} title="Lechon Kawali" />
          <MenuList image={MenuItem2} title="Calamaris" />
          <MenuList image={MenuItem3} title="Sweet Chilli Chicken" />
          <MenuList image={MenuItem4} title="Kinilaw" />
          <MenuList image={MenuItem5} title="Salted Egg Chicken" />
          <MenuList image={MenuItem6} title="Sinuglaw" />
          <MenuList image={MenuItem7} title="Buttered Chicken" />
          <MenuList image={MenuItem8} title="Spicy Chiken Wings" />
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
