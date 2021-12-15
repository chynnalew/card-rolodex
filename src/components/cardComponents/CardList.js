import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import {useGetData} from '../../hooks/useGetData';

function CardList(props) {
  const cardListStyle = {
    padding: "20px",
  };
  const cardWrapStyle = {
    width: "340px",
    height: "510px",
    float: "left",
    margin: '10px'
  };
  const buttonStyle = {
    backgroundColor: 'black',
    border: 'lightblue 2px solid',
    color: 'lightblue',
    padding: '10px',
    margin: '5px',
    marginLeft:'20px',
    width: '125px',
    float: 'left'
  }
  const buttonStyleRed = {
    backgroundColor: 'black',
    border: 'red 2px solid',
    color: 'red',
    padding: '10px',
    margin: '5px',
    marginRight:'20px',
    width: '125px',
    float:'right'
  }
  
  const [cardList] = useGetData();

  if (cardList.length > 0) {
    return (
      <div style={cardListStyle}>
        <h1>Your Card List</h1>
        {cardList.map((card) => (
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
              id={card.id}
            />
            <button onClick={() => props.onEditClick(card.id)} class="hover" style={buttonStyle}>
              Edit
            </button>
            <button onClick={()=>props.onDeleteClick(card)} class="hover" style={buttonStyleRed}>
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div style={cardListStyle}>
        <h1>Card List</h1>
        <p>No cards yet!</p>
      </div>
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.array,
  onDeleteClick: PropTypes.func,
  onEditClick: PropTypes.func,
};

export default CardList;
