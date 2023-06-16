import { Card, Col, Button } from "react-bootstrap";

const GridItems1 = (props) => {
  return (
    <>
      <Col md="12">
        <Card style={{ width: "78.2rem" }}>
          <Card.Img
            style={{ width: "1250px", height: "500px" }}
            variant="top"
            src={props.image}
          />
          <Card.Body>
            <Card.Title>{props.title1}</Card.Title>
            <Card.Text>
              A main course is the featured or primary dish in a meal consisting
              of several courses. It usually follows the entrée ("entry")
              course.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Home</Card.Link>
            <Card.Link href="#">More Info</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default GridItems1;
