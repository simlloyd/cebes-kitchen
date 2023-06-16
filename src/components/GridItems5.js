import { Card, Col, Button } from "react-bootstrap";

const GridItems4 = (props) => {
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
            <Card.Title>{props.title5}</Card.Title>
            <Card.Text>
              Meal preparation means how an individual prepares their meals.
              Assistance with meal preparation includes planning meals for
              clients or patients, cooking, assembling ingredients, setting out
              food, utensils, and cleaning up after meals.
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

export default GridItems4;
