import React, { Component, createRef } from "react";

class LeftSide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4 left-side">
        <h3 className="text-center">
          <i className="fa fa-star opacity-medium" />
          <i className="fa fa-star opacity-medium" />
          <i className="fa fa-star opacity-small" />
          &nbsp; Diamond Sweeper &nbsp;
          <i className="fa fa-star opacity-small" />
          <i className="fa fa-star opacity-medium" />
          <i className="fa fa-star opacity-medium" />
        </h3>
        <div className="rules-container">
          <h4 className="rules-heading">Game Rules</h4>
          <blockquote>
            <ul className="rules-content">
              <li>
                The game board has 64 squares. 8 diamonds hidden behind the
                board.
              </li>
              <li>
                Click the square to find out the diamond with less number of
                clicks.
              </li>
              <li>
                The game ends when all diamonds are found. The winning score is
                the number of squares still left unturned.
              </li>
            </ul>
          </blockquote>
        </div>
        <footer>
          Made with <span class="fa fa-heart love" /> by{" "}
          <a href="https://twitter.com/souravdev2019">@souravdev2019</a>
        </footer>
      </div>
    );
  }
}

export default LeftSide;
