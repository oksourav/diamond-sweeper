import React, { Component, Fragment } from "react";
import LeftSide from "./Components/LeftSide";
import GameCanvas from "./Components/GameCanvas";
import Header from "./Components/Header";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: {
        diamondLeft: 0,
        yourScore: 0
      }
    };
    this.getScore= this.getScore.bind(this);
  }

  getScore(score){
    this.setState({
      score
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <LeftSide showScore={this.state.score} noOfrow={8} />
            <GameCanvas noOfrow={8} getScore={this.getScore} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
