import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const borderConditions = () => {
    if (props.borderColor === '#000000' || props.borderColor === null) {
      return ({
      border: `5px white solid`, 
      width: "300px",
      height: "420px",
      margin: "10px",
      padding: "5px",
      paddingLeft: "5px",
      paddingRight: "5px",
      overflow: "hidden",
      borderRadius: "7px",
      fontFamily: "'Nunito', sans-serif",
      margin:'auto', })
    } else {
      return ({ 
        border: `5px ${props.borderColor} solid`,
        width: "300px",
        height: "420px",
        margin: "10px",
        padding: "5px",
        paddingLeft: "5px",
        paddingRight: "5px",
        overflow: "hidden",
        borderRadius: "7px",
        fontFamily: "'Nunito', sans-serif",
        margin:'auto',
      })
    }
  }
  const cardStyle = borderConditions();

  const cardTop = {
    width: "97%",
    paddingLeft: "5px",
  };

  const cardImage = {
    height: "150px",
    width: "250px",
    border: `4px ${props.borderColor} inset`,
    margin: "auto",
    marginTop: "25px",
  };
  
  const imgStyle = {
      objectFit: 'cover',
      height: '142px',
      width: '242px',
  }

  const cardDescription = {
    fontStyle: "italic",
    backgroundColor: "cornFlowerBlue",
    transform: "skew(-10deg)",
    width: "200px",
    margin: "auto",
    marginTop: "4px",
    fontSize: "12px",
    // float: "right"
  };

  const attack = {
    marginTop: "15px",
    float: "left",
    width: "80%",
    textAlign: "left",
    //border: 'green dotted 1px'
  };

  const stats = {
    marginTop: "15px",
    float: "right",
    fontWeight: "bold",
    fontSize: "larger",
    paddingLeft: "5px",
    // border: 'green dotted 1px',
    width: "10%",
    textAlign: "right",
  };

  // height: 150px;
  // width: 250px;

  return (
    <div style={cardStyle}>
      <div style={cardTop}>
        <p style={{ float: "left", margin: "0" }}>
          <strong>{props.name}</strong>
        </p>
        <p style={{ float: "right", margin: "0" }}>{props.level}</p>
      </div>
      <div style={cardImage}>
        <img style={imgStyle} src={props.img} />
      </div>
      <p style={cardDescription}>{props.description}</p>
      <div style={{ display: "inline-block", width: "80%", margin: "auto" }}>
        <p style={attack}>
          <span style={{ fontWeight: "bold", fontSize: "larger" }}>
            {props.attack1}
          </span>{" "}
          {props.attack1Description}
        </p>
        <p style={stats}>{props.attack1Stats}</p>
      </div>
      <div style={{ display: "inline-block", width: "80%", margin: "auto" }}>
        <p style={attack}>
          <span style={{ fontWeight: "bold", fontSize: "larger" }}>
            {props.attack2}
          </span>{" "}
          {props.attack2Description}
        </p>
        <p style={stats}>{props.attack2Stats}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  level: PropTypes.string,
  img: PropTypes.any,
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
