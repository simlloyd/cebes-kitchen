import { Card, Col, Button } from "react-bootstrap";

const GridItems2 = (props) => {
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
            <Card.Title>{props.title2}</Card.Title>
            <Card.Text>
              Both fresh and dried noodles have to be cooked for about 10–15 min
              in boiling salty water and drained, before they are served as
              dishes. Instant (precooked) noodles are produced by steaming of
              fresh noodles and drying (traditional instant) or by steaming and
              frying (ramen style).
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

export default GridItems2;
