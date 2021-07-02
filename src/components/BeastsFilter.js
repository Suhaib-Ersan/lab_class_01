import React from "react";
import Form from "react-bootstrap/Form";

class BeastsFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="BeastsFilter">
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Show beasts that have:</Form.Label>
            <Form.Control as="select" custom onChange={this.props.selectAndShowHorns}>
              <option value="All">All Beasts</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">WOW</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default BeastsFilter;
