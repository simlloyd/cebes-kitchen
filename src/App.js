import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
// import Content1 from "./components/Content1"
import Content from "./components/Content";
import Location from "./components/Location";
import Menu from "./components/Menu";
function App() {
  return (
    <div id="home" className="App">
      <Heading></Heading>
      {/* <Content1></Content1> */}
      <Content></Content>
      <br />
      <Location></Location>
      <br />
      <Menu></Menu>
    </div>
  );
}

export default App;
