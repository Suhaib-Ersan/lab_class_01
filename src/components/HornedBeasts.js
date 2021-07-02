import React from "react";
import { Card, Button } from "react-bootstrap/";

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
  renderModal = () => {
    this.props.renderModal(this.props.title);
  };

  render() {
    return (
      <div className="HornedBeasts">
        <Card border="warning" style={{ maxWidth: "18rem" }}>
          <Card.Img variant="top" src={this.props.image_url} alt="beasty" onClick={this.increaseBeastiesLikes}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>Click image to like the beast</Card.Text>
            <Card.Text>Likes 💗 {this.state.beastiesLikes}</Card.Text>
            <Button onClick={this.renderModal}>Show details</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
