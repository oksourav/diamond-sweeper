import React, { Component } from "react";

class Cell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cellStatus: "question"
    };

    this.openCell = this.openCell.bind(this);
  }

  openCell() {
    const {
      position,
      selectedCell,
      diamondStatus,
      suggestedAngle,
      storeSelectedCell
    } = this.props;
    if (selectedCell.indexOf(position) === -1) {
      const isItDiamond = diamondStatus.isDiamond ? "diamond" : suggestedAngle;
      this.setState({
        cellStatus: isItDiamond
      });
      storeSelectedCell(position, isItDiamond);
    }
  }

  render() {
    return (
      <li
        className={`cell fa fa-${this.state.cellStatus} fa-3x`}
        onClick={event => this.openCell()}
      >
        {this.state.cellStatus ? "" : this.props.children}
      </li>
    );
  }
}

export default Cell;
