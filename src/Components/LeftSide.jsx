import React from "react";

const LeftSide = props => {
  return (
    <div className="col-md-4 left-side">
      <h3 className="text-center">
        <i className="icon-star opacity-medium" />
        <i className="icon-star opacity-medium" />
        <i className="icon-star opacity-small" />
        &nbsp; Diamond Sweeper &nbsp;
        <i className="icon-star opacity-small" />
        <i className="icon-star opacity-medium" />
        <i className="icon-star opacity-medium" />
      </h3>
      <div className="rules-container">
        <h4 className="rules-heading">Score Card</h4>
        <blockquote>
          <div className="diamonds-left-container">
            <label className="score-label">
              Diamonds Left{" "}
              <span className="badge badge-primary">
                {props.showScore.diamondLeft}
              </span>
            </label>
            <div>
              <progress
                value={props.showScore.diamondLeft}
                max={props.noOfrow}
                min={0}
              />
            </div>
            <label>
              Your Score{" "}
              <span className="badge badge-primary">
                {props.showScore.yourScore}
              </span>
            </label>
            <div>
              <progress
                value={props.showScore.yourScore}
                min={0}
                max={Math.pow(props.noOfrow, 2)}
              />
            </div>
          </div>
        </blockquote>
        <h4 className="rules-heading">Game Rules</h4>
        <blockquote>
          <ul className="rules-content">
            <li>
              The game board has 64 squares. 8 diamonds hidden behind the board.
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
        Made with <span className="fa fa-heart love" /> by{" "}
        <a href="https://twitter.com/souravdev2019">@souravdev2019</a>
      </footer>
    </div>
  );
};

export default LeftSide;
