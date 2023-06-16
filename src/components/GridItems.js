import { Card, Col, Button } from "react-bootstrap";

const GridItems = (props) => {
  return (
    <>
      <Col>
        <Card style={{ width: "78.2rem" }}>
          <Card.Img
            style={{ width: "1250px", height: "550px" }}
            variant="top"
            src={props.image}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              chop suey, Chinese American dish consisting of bits of meat, bean
              sprouts, water chestnuts, and other vegetables, stir-fried and
              then served with rice.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Home</Card.Link>
            <Card.Link href="#MainCourse">Order Menu</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default GridItems;
