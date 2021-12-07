import React from "react";
import Card from "./Card";

function CardList() {
  const sampleCardList = [
    {
      name: "Tom",
      level: "5",
      description: "That dude",
      attack1: "Attack",
      attack1Stats: "2attack",
      attack1Description: "do the attack",
      attack2: "Heals",
      attack2Stats: "2heal",
      attack2Description: "Heal yourself 2 hp",
      id: "5",
    },
    {
      name: "Tom2",
      level: "51",
      description: "That other dude",
      attack1: "Big Attack",
      attack1Stats: "10 attack",
      attack1Description: "do the attack",
      attack2: "Big Heals",
      attack2Stats: "20 heal",
      attack2Description: "Heal yourself 20 hp",
      id: "5",
    },
    {
      name: "Tom",
      level: "5",
      description: "That dude",
      attack1: "Attack",
      attack1Stats: "2attack",
      attack1Description: "do the attack",
      attack2: "Heals",
      attack2Stats: "2heal",
      attack2Description: "Heal yourself 2 hp",
      id: "5",
    },
    {
      name: "Tom2",
      level: "51",
      description: "That other dude",
      attack1: "Big Attack",
      attack1Stats: "10 attack",
      attack1Description: "do the attack",
      attack2: "Big Heals",
      attack2Stats: "20 heal",
      attack2Description: "Heal yourself 20 hp",
      id: "5",
    },
  ];
  return (
    <div className="cardList">
      <h1>Card List</h1>
      {sampleCardList.map((card, index) => (
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
  );
}

export default CardList;
