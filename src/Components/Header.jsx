import React from "react";
import batman from "../images/batman.png";

const Header = props => {
  return (
    <header className="main-header">
      <div className="user float-right">
        <i className="user-name">Hello Guest</i>
        <img
          src={batman}
          alt="user icon"
          height="40px"
          className="user-avatar"
        />
      </div>
    </header>
  );
};

export default Header;
