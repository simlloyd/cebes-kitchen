import { Container, Row } from "react-bootstrap";
import Content1 from "./Content1";
// import GridItems from "./GridItems";
// import GridItems1 from "./GridItems1";
// import GridItems2 from "./GridItems2";
// import GridItems3 from "./GridItems3";
// import GridItems4 from "./GridItems4";
// import GridItems5 from "./GridItems5";
import FirstImage from "./../images/chopsuey.jpg";
import secondImage from "./../images/main-course.jpg";
import thirdImage from "./../images/noodles1.jpg";
import fourthImage from "./../images/sisig1.jpg";
import fiftImage from "./../images/soup.jpg";
import sixthtImage from "./../images/value-meal.jpg";

const Content = () => {
  return (
    <div className="bg-dark text-light">
      <Container>
        <h1>Menu</h1>
        <br />
        <Content1
          image={
            (FirstImage,
            secondImage,
            thirdImage,
            fourthImage,
            fiftImage,
            sixthtImage)
          }
        ></Content1>

        {/* <Row id="chopSuey" className="g-3 justify-content-center">
          <GridItems image={Newitem} title="Chop-suey" />
          <GridItems1 image={Newitem1} title1="Main Course" />
          <GridItems2 image={Newitem2} title2="Noodles" />
          <GridItems3 image={Newitem3} title3="Sisig" />
          <GridItems4 image={Newitem4} title4="Soup" />
          <GridItems5 image={Newitem5} title5="Value Meal" />
        </Row>
        <br />
        <Row id="mainCourse" className="g-3 justify-content-center">
          <GridItems1 image={Newitem1} title1="Main Course" />
        </Row>
        <br />
        <Row id="nooDles" className="g-3 justify-content-center">
          <GridItems2 image={Newitem2} title2="Noodles" />
        </Row>
        <br />
        <Row id="siSig" className="g-3 justify-content-center">
          <GridItems3 image={Newitem3} title3="Sisig" />
        </Row>
        <br />
        <Row id="soUp" className="g-3 justify-content-center">
          <GridItems4 image={Newitem4} title4="Soup" />
        </Row>
        <br />
        <Row id="valueMeal" className="g-3 justify-content-center">
          <GridItems5 image={Newitem5} title5="Value Meal" />
        </Row> */}
      </Container>
    </div>
  );
};

export default Content;
