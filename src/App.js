import React, { Component, Fragment } from "react";
import LeftSide from "./Components/LeftSide";
import GameCanvas from "./Components/GameCanvas";
import Header from "./Components/Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: {
        diamondLeft: 0,
        yourScore: 0
      },
      gameState: 0,
      row: 8
    };
    this.refreshGameBoard = this.refreshGameBoard.bind(this);
    this.getScore = this.getScore.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  getScore(score) {
    this.setState({
      score
    });
  }

  refreshGameBoard(gameOver) {
    this.setState({
      gameState: gameOver,
      score: {
        diamondLeft: 0,
        yourScore: 0
      }
    });
  }

  startGame() {
    this.setState({
      gameState: 1,
      score: {
        diamondLeft: 0,
        yourScore: 0
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <LeftSide showScore={this.state.score} noOfrow={this.state.row} />
            {this.state.gameState === 1 ? (
              <GameCanvas
                noOfrow={this.state.row}
                getScore={this.getScore}
                refreshGameBoard={this.refreshGameBoard}
              />
            ) : (
              <div className="col-md-8 game-canvas">
                <div
                  className="game-container"
                  style={{
                    background: "#cddc39",
                    height: "100%",
                    textAlign: "center"
                  }}
                >
                  <div className="plus">
                    {this.state.gameState === 2 ? (
                      <h3 style={{ color: "#fff" }}>Game Over.</h3>
                    ) : (
                      ""
                    )}
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={event => this.startGame()}
                    >
                      <i className="fa fa-play-circle" aria-hidden="true" />
                      &nbsp; Start Game
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
