import React from 'react';
import PropTypes from 'prop-types';

function NavBar(props) {

  const navBarStyle = {
    height: '20px',
    width: '100%',
    backgroundColor: 'black',
    textAlign: 'center',
    borderBottom: '3px white solid',
    padding: '10px',
    position: 'sticky',
  }
  const buttonStyle = {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: 'large',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    width:'25%'
  }

  return (
    <div style={navBarStyle}>
      <div >
        <button style={buttonStyle} class='buttons' onClick={() => props.onViewCardsClick()}>View Cards</button>
        <button style={buttonStyle} class='buttons' onClick={() => props.onAddCardClick()}>Add a Card</button>
        <button style={buttonStyle} class='buttons' onClick={() => props.onInstructionsClick()}>Instructions</button>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  onVieCardsClick: PropTypes.func,
  onAddCardClick: PropTypes.func,
  onInstructionsClick: PropTypes.func
}

export default NavBar;