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
            <Card.Title>{props.title4}</Card.Title>
            <Card.Text>
              The simplest way to make any soup is to cook up the vegetable with
              water and spices, discard spices, blend, strain and reheat with
              salt, sugar and pepper powder. To this basic version, you can add
              cornflour slurry, cooked and reserved vegetables or cream. With
              this in mind, you can try out varieties of soups.
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
