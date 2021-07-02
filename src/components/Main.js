import React from "react";

import BeastsJson from "./BeastsJson";

import HornedBeasts from "./HornedBeasts";
import { CardColumns } from "react-bootstrap/";
import BeastsFilter from "./BeastsFilter";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenBeastsJsonBeasts: BeastsJson,
    };
  }
  selectAndShowHorns = (event) => {
    let newArr = [];

    let valueNum = Number(event.target.value);
    if (!(isNaN(valueNum))) {
      newArr = BeastsJson.filter((ele) => {
        if (ele.horns === valueNum) {
          return 1;
        }
      });
    } else {
      newArr = BeastsJson;
    }
    this.setState({
      chosenBeastsJsonBeasts: newArr,
    });
  };
  render() {
    return (
      <div className="Main">
        <BeastsFilter selectAndShowHorns={this.selectAndShowHorns} />
        <CardColumns className="card-columns">
          {this.state.chosenBeastsJsonBeasts.map((element, index) => {
            return <HornedBeasts renderModal={this.props.renderModal} key={index} title={element.title} image_url={element.image_url} description={element.description} />;
          })}
        </CardColumns>
      </div>
    );
  }
}
export default Main;
