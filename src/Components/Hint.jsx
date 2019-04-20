import React from "react";

const Hint = props => {
  console.log(props);
  return <i className={`fa fa-${props.symbol}`} />;
};

export default Hint;
