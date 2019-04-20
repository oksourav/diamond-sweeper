import React, { Component } from "react";
import Cell from "../Components/Cell";

class GameCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDiamondCell: [],
      selectedCell: [],
      generatedCells: []
    };

    this.generateGameBoard = this.generateGameBoard.bind(this);
    this.storeSelectedCell = this.storeSelectedCell.bind(this);
  }

  componentWillMount() {
    const { noOfrow } = this.props;
    // Create Row*Row structure
    let generatedCells = this.generateGameBoard(noOfrow);
    // Creating Diamond Cell
    this.setState({
      generatedCells: generatedCells[0],
      diamondHint: generatedCells[1]
    });
  }

  generateGameBoard(row) {
    let array = [];
    const diamonds = [];
    const min = 0;
    const max = Math.pow(this.props.noOfrow, 2) - 1;
    for (let index = 0; index < row * row; index++) {
      array[index] = {
        isDiamond: 0
      };
    }
    while (diamonds.length < row) {
      const randomNumber = Math.floor(Math.random() * (max - min)) + min;
      if (diamonds.indexOf(randomNumber) === -1) {
        diamonds.push(randomNumber);
        array[randomNumber]["isDiamond"] = 1;
      }
    }
    return [array, diamonds];
  }

  storeSelectedCell(cellNo, isDiamondCell) {
    let selectedCell = [...this.state.selectedCell, cellNo];
    let selectedDiamondCell = this.state.selectedDiamondCell;
    if (isDiamondCell === "diamond") {
      selectedDiamondCell.push(cellNo);
    }
    this.setState({
      selectedCell,
      selectedDiamondCell
    });
  }

  render() {
    return (
      <div className="col-md-8 game-canvas">
        <ul className="game-container">
          {this.state.generatedCells.map((arr, index) => {
            return (
              <Cell
                key={index}
                position={index}
                diamondStatus={arr}
                selectedCell={this.state.selectedCell}
                storeSelectedCell={this.storeSelectedCell}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default GameCanvas;
