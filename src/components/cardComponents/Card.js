import React from "react";
import PropTypes from "prop-types";
import bluePurple from "../../img/backgrounds/bluePurple.jpeg";
import black from "../../img/backgrounds/black.jpeg";
import blue from "../../img/backgrounds/blue.jpeg";
import green from "../../img/backgrounds/green.jpeg";
import pink from "../../img/backgrounds/pink.jpeg";
import purple from "../../img/backgrounds/purple.jpeg";
import red from "../../img/backgrounds/red.jpeg";
import redGreen from "../../img/backgrounds/redGreen.jpeg";
import yellow from "../../img/backgrounds/yellow.jpeg";

function Card(props) {
  console.log(props.background);
  const backgroundConditions = () => {
    if (props.background === "bluePurple") {
      return {
        background: `url(${bluePurple})`,
      };
    }
    if (props.background === "black") {
      return {
        background: `url(${black})`,
      };
    }
    if (props.background === "blue") {
      return {
        background: `url(${blue})`,
      };
    }
    if (props.background === "green") {
      return {
        background: `url(${green})`,
      };
    }
    if (props.background === "pink") {
      return {
        background: `url(${pink})`,
      };
    }
    if (props.background === "purple") {
      return {
        background: `url(${purple})`,
      };
    }
    if (props.background === "red") {
      return {
        background: `url(${red})`,
      };
    }
    if (props.background === "redGreen") {
      return {
        background: `url(${redGreen})`,
      };
    }
    if (props.background === "yellow") {
      return {
        background: `url(${yellow})`,
      };
    } else {
      return {
        background: "grey",
      };
    }
  };

  const borderConditions = () => {
    if (props.borderColor === "#000000" || props.borderColor === null) {
      return {
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
        margin: "auto",
        color: "white",
      };
    } else {
      return {
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
        margin: "auto",
        color: `${props.textColor}`,
        backgroundPosition: "no-repeat",
        backgroundSize: "100%",
      };
    }
  };

  const cardStyle = borderConditions();
  const backgroundStyle = backgroundConditions();
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
    objectFit: "cover",
    height: "142px",
    width: "242px",
  };

  const cardDescription = {
    fontStyle: "italic",
    backgroundColor: `${props.borderColor}80`,
    transform: "skew(-10deg)",
    width: "200px",
    margin: "auto",
    marginTop: "4px",
    fontSize: "12px",
  };

  const attack = {
    marginTop: "15px",
    float: "left",
    width: "80%",
    textAlign: "left",
  };

  const stats = {
    marginTop: "15px",
    float: "right",
    fontWeight: "bold",
    fontSize: "larger",
    paddingLeft: "5px",
    width: "10%",
    textAlign: "right",
  };

  return (
    <div style={{ ...cardStyle, ...backgroundStyle }}>
      <div style={cardTop}>
        <p style={{ float: "left", margin: "0" }}>
          <strong>{props.name}</strong>
        </p>
        <p style={{ float: "right", margin: "0" }}>{props.level}</p>
      </div>
      <div style={cardImage}>
        <img style={imgStyle} src={props.img} alt="" />
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
