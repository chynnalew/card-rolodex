import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <p>Level: {props.level}</p>
      <p>Description: {props.description}</p>
      <p>Move1: {props.attack1, props.attack1Stats, props.attack1Description}</p>
      <p>Move2: {props.attack1, props.attack1Stats, props.attack1Description}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  level: PropTypes.string,
  description: PropTypes.string,
  attack1: PropTypes.string,
  attack1Stats: PropTypes.string,
  attack1Description: PropTypes.string,
  attack2: PropTypes.string,
  attack2Stats: PropTypes.string,
  attack2Description: PropTypes.string,
  id: PropTypes.string,
};

export default Card;
