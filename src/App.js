import React from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BeastsJson from "./components/BeastsJson.json";
import BeastySelect from "./components/BeastySelect";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedAnimal: {},
    };
  }
  renderModal = (title) => {
    let returnedElm = BeastsJson.find((elm) => {
      if (elm.title === title) {
        return elm;
      }
    });
    this.setState({
      selectedAnimal: returnedElm,
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      selectedAnimal: {},
      show: false,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Main renderModal={this.renderModal}/>
        <BeastySelect show={this.state.show} handleClose={this.handleClose} selectedAnimal={this.state.selectedAnimal} />
        <Footer />
      </div>
    );
  }
}

export default App;
