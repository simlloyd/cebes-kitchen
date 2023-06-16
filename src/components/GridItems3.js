import { Card, Col, Button } from "react-bootstrap";

const GridItems3 = (props) => {
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
            <Card.Title>{props.title3}</Card.Title>
            <Card.Text>
              Sisig (/ˈsiːsɪɡ/ Tagalog pronunciation: ['sisig]) is a Filipino
              dish made from pork jowl and ears (maskara), pork belly, and
              chicken liver which is usually seasoned with calamansi, onions,
              and chili peppers. It originates from the Pampanga region in
              Luzon. Kapampangan sisig served on a hot plate.
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

export default GridItems3;
