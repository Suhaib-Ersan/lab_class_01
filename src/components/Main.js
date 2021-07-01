import React from "react";
import HornedBeasts from "./HornedBeasts";
import Row from "react-bootstrap/Row";
import BeastsJson from "./BeastsJson.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <Row xs={2} md={4} xl={5}>
            {BeastsJson.map((element, index) => {
              return <HornedBeasts renderModal={this.props.renderModal} key={index} title={element.title} image_url={element.image_url} description={element.description} />;
            })}
          </Row>
        </div>
      </div>
    );
  }
}
export default Main;
