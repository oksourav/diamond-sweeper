import React from "react";
import PropTypes from "prop-types";

const Modal = props => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <div className="right-side-modal-container">
      <div className="right-side-modal">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="close-icon" onClick={props.onClose}>
                <i className="fa fa-times-circle" />
              </div>
              <header className="right-modal-header">
                <h3
                  style={{
                    textTransform: "capitalize"
                  }}
                >
                  {props.contentLabel}
                </h3>
              </header>
              <div className="right-modal-body">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  contentLabel: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Modal;
