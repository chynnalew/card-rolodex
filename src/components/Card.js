import React from 'react';

function Card(props) {
  const name = "card1"
  const name2 = 'card2'

  return (
    <div className='card'>
      {name + name2}
    </div>
  )
}

export default Card;