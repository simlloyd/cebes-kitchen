import { Button, Card, Col } from "react-bootstrap";

const MenuList = (props) => {
  return (
    <>
      <Col md="2">
        <Card>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Button variant="primary">Place Order</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MenuList;
