import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastiesLikes: 0,
    };
  }
  increaseBeastiesLikes = () => {
    this.setState(
      {
        beastiesLikes: this.state.beastiesLikes + 1,
      },
      console.log("eyy")
    );
  };

  render() {
    return (
      <div>
        <Card border="warning" style={{ maxWidth: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img variant="top" src={this.props.image_url} alt="beasty" onClick={this.increaseBeastiesLikes} />
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>Click image to like the beast</Card.Text>
            <Card.Text>Likes 💗 {this.state.beastiesLikes}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
