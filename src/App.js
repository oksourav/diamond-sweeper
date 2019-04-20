import React, { Component, Fragment } from "react";
import LeftSide from "./Components/LeftSide";
import GameCanvas from "./Components/GameCanvas";
import Header from "./Components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <LeftSide />
            <GameCanvas noOfrow={8} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
