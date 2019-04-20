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
    const { position, selectedCell } = this.props;
    if (selectedCell.indexOf(position) === -1) {
      const isItDiamond = this.props.diamondStatus.isDiamond ? "diamond" : "";
      this.setState({
        cellStatus: isItDiamond
      });
      this.props.storeSelectedCell(position, isItDiamond);
    }
  }

  render() {
    return (
      <li
        className={`cell fa fa-${this.state.cellStatus} fa-3x`}
        onClick={event => this.openCell()}
      />
    );
  }
}

export default Cell;
