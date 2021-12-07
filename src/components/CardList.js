import React from "react";
import Card from "./Card";
import PropTypes from 'prop-types';

function CardList(props) {
  if (props.cardList.length > 0) {
    return (
      <div className="cardList">
        <h1>Card List</h1>
        {props.cardList.map((card, index) => (
          <Card
            name={card.name}
            level={card.level}
            description={card.description}
            attack1={card.attack1}
            attack1Stats={card.attack1Stats}
            attack1Description={card.attack1Description}
            attack2={card.attack2}
            attack2Stats={card.attack2Stats}
            attack2Description={card.attack2Description}
            id={card.id}
          />
        ))}
      </div>
    )
  } else {
    return (
      <div className="cardList">
        <h1>Card List</h1>
        <p>No cards yet!</p>
      </div>
    )
  }
}

CardList.propTypes = {
  cardList: PropTypes.array
}

export default CardList;
