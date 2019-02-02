import React, { Component } from "react";
import HomeGrid from "./HomeGrid.jsx";
import ReactDOM from "react-dom";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
  

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <div>
        <HomeGrid />
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
}
export default App;