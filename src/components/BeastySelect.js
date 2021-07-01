import React from "react";
import { Modal, Button, Card } from "react-bootstrap/";

class BeastySelect extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedAnimal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img variant="top" src={this.props.selectedAnimal.image_url} alt="beasty"/>
            {this.props.selectedAnimal.description}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default BeastySelect;
