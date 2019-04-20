import React, { Component } from "react";
import Cell from "../Components/Cell";
import Modal from "../Components/Modal";
import award from "../images/award.svg";
import { getRowNumber, closestValue } from "../Utilty/UtilityFunctions";

class GameCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDiamondCell: [],
      selectedCell: [],
      generatedCells: [],
      isModalOpen: false,
      diamondHint: [],
      suggestDiamondHint: ""
    };

    this.suggestDiamondHint = this.suggestDiamondHint.bind(this);
    this.generateGameBoard = this.generateGameBoard.bind(this);
    this.storeSelectedCell = this.storeSelectedCell.bind(this);
    this.getComputedScore = this.getComputedScore.bind(this);
    this.onClose = this.onClose.bind(this);
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
    // delete diamond hint
    let diamondHint = this.state.diamondHint;
    let diamondHintPosition = diamondHint.indexOf(cellNo);
    if (diamondHintPosition !== -1) {
      diamondHint.splice(diamondHintPosition, 1);
    }
    this.setState(
      {
        selectedCell,
        selectedDiamondCell,
        isModalOpen:
          this.state.selectedDiamondCell.length === this.props.noOfrow
      },
      () => {
        this.props.getScore(this.getComputedScore());
        this.suggestDiamondHint(cellNo);
      }
    );
  }

  getComputedScore() {
    let diamondLeft = this.state.selectedDiamondCell.length;
    let selected = this.state.selectedCell.length;
    let lengthOfBoard = Math.pow(this.props.noOfrow, 2);
    return {
      diamondLeft: diamondLeft,
      yourScore: lengthOfBoard - selected
    };
  }

  onClose() {
    this.setState(
      {
        isModalOpen: false
      },
      () => {
        this.props.refreshGameBoard(2);
      }
    );
  }

  suggestDiamondHint(cellNo) {
    let hintArray = this.state.diamondHint;
    let nearestDiamond = closestValue(hintArray, cellNo);
    // Get Row Number of clicked Cell
    let rowNumber = getRowNumber(cellNo, this.props.noOfrow);
    let hintRowNumber = getRowNumber(nearestDiamond, this.props.noOfrow);
    let hintAngle = "";
    if (rowNumber === hintRowNumber) {
      hintAngle = cellNo > nearestDiamond ? "arrow-left" : "arrow-right";
    } else {
      hintAngle = rowNumber > hintRowNumber ? "arrow-up" : "arrow-down";
    }
    this.setState({
      suggestDiamondHint: hintAngle
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
                suggestedAngle={this.state.suggestDiamondHint}
              />
            );
          })}
        </ul>
        <Modal isOpen={this.state.isModalOpen} onClose={this.onClose}>
          <div className="row">
            <img
              className="award"
              src={award}
              alt="Award"
              width="128px"
              height="128px"
            />
          </div>
          <h2 className="text-center" style={{ margin: "10px 0" }}>
            Congratulations! you have finished the game.
          </h2>
          <h3 className="text-center">
            Your Score is :{" "}
            <span className="badge badge-primary">
              {this.getComputedScore().yourScore}
            </span>
          </h3>
          <div className="social-media">
            <h4 className="text-right">About me</h4>
            <a href="https://souravdash.com/" className="fa fa-globe">
              <span>souravdash.com/</span>
            </a>
            <a
              href="https://twitter.com/souravdev2019"
              className="fa fa-twitter"
            >
              <span>Twitter</span>
            </a>
            <a href="https://github.com/sourav52" className="fa fa-github">
              <span>Github</span>
            </a>
            <a
              href="https://www.quora.com/profile/Sourav-Dash-2"
              className="fa fa-quora"
            >
              <span>Quora</span>
            </a>
            <a href="https://codepen.io/sourav_dash/" className="fa fa-codepen">
              <span>CodePen</span>
            </a>
            <a
              href="https://www.linkedin.com/in/souravdash/"
              className="fa fa-linkedin"
            >
              <span>Linkedin</span>
            </a>
          </div>
        </Modal>
      </div>
    );
  }
}

export default GameCanvas;
