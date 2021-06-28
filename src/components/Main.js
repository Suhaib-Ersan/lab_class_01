import React from "react";
import BeastsJson from "./BeastsJson.json";
import HornedBeasts from "./HornedBeasts";

class Main extends React.Component {
  render() {
    return (
      <div>
        {BeastsJson.map((element, index) => {
          return <HornedBeasts key={index} title={element.title} image_url={element.image_url} description={element.description} />;
        })}
      </div>
    );
  }
}

export default Main;
