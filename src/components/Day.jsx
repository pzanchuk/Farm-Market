import React from "react";
import PropTypes from "prop-types";

function Day(props){
  return (
    <div>
      {props.location}
      {props.hours}
      {props.booth}
    </div>
  );
}

Day.propTypes = {
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string
};

export default Day;
