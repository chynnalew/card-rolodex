import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

function SampleCardList(props) {
  const cardListStyle = {
    padding: "20px",
  };
  const cardWrapStyle = {
    width: "340px",
    height: "510px",
    float: "left",
    margin: '10px'
  };

  return (
    <div style={cardListStyle}>
      <h1>Sample Cards</h1>
      {props.cardList.map((card) => (
        <div style={cardWrapStyle}>
          <Card
            key={card.id}
            name={card.name}
            level={card.level}
            img={card.img}
            description={card.description}
            attack1={card.attack1}
            attack1Stats={card.attack1Stats}
            attack1Description={card.attack1Description}
            attack2={card.attack2}
            attack2Stats={card.attack2Stats}
            attack2Description={card.attack2Description}
            textColor={card.textColor}
            borderColor={card.borderColor}
            background={card.background}
            id={card.id}
            key={card.id}
          />
        </div>
      ))}
    </div>
  )
}

SampleCardList.propTypes = {
  cardList: PropTypes.array,
};

export default SampleCardList;
