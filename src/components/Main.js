import React from "react";
import HornedBeasts from "./HornedBeasts";

class Main extends React.Component {
  render() {
    return (
      <div>
        <HornedBeasts title="Ghazal" imageUrl="https://cdn.britannica.com/64/138864-050-5999F47C/Dorcas-gazelle.jpg" description="A gazelle is any of many antelope species in the genus Gazella. A third former subgenus, Procapra, includes three living species of Asian gazelles."/>
        <HornedBeasts title="Unicorn" imageUrl="https://www.vpr.org/sites/vpr/files/styles/medium/public/201910/unicorn-istock-MadKruben.png" description="The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead."/>
      </div>
    );
  }
}

export default Main;
