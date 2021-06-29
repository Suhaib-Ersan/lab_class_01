import React from "react";
import BeastsJson from "./BeastsJson.json";
import HornedBeasts from "./HornedBeasts";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Row xs={2} md={4} xl={5}>
            {BeastsJson.map((element, index) => {
              return <HornedBeasts key={index} title={element.title} image_url={element.image_url} description={element.description} />;
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default Main;
