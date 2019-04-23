import React from "react";
import PropTypes from "prop-types";

function Season(props){
  return (
    <div>
      {props.month}
      {props.selection}
    </div>
  );
}

Season.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default Season;
