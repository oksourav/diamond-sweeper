import React from "react";
import PropTypes from "prop-types";

const LeftSide = props => {
  const { showScore, noOfrow } = props;
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
        <div className="score-card">
          <h4 className="rules-heading">Score Card</h4>
          <blockquote>
            <div className="diamonds-left-container">
              <label className="score-label">
                Diamonds Left{" "}
                <span className="badge badge-primary">
                  {showScore.diamondLeft}
                </span>
              </label>
              <div>
                <progress value={showScore.diamondLeft} max={noOfrow} min={0} />
              </div>
              <label>
                Your Score{" "}
                <span className="badge badge-primary">
                  {showScore.yourScore}
                </span>
              </label>
              <div>
                <progress
                  value={showScore.yourScore}
                  min={0}
                  max={Math.pow(noOfrow, 2)}
                />
              </div>
            </div>
          </blockquote>
        </div>
        <div className="game-rules">
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
      </div>
      <footer>
        Made with <span className="fa fa-heart love" /> by{" "}
        <a href="https://twitter.com/souravdev2019">@souravdev2019</a>
      </footer>
    </div>
  );
};

LeftSide.propTypes = {
  showScore: PropTypes.object.isRequired,
  noOfrow: PropTypes.number.isRequired
};

export default LeftSide;
