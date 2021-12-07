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
    width:'20%'
  }

  return (
    <div style={navBarStyle}>
        <button style={buttonStyle} class='buttons' onClick={() => props.onInstructionsClick()}>Instructions</button>
        <button style={buttonStyle} class='buttons' onClick={() => props.onViewSampleCardsClick()}>Examples</button>
        <button style={buttonStyle} class='buttons' onClick={() => props.onViewUserCardsClick()}>Your Cards</button>
        <button style={buttonStyle} class='buttons' onClick={() => props.onAddCardClick()}>Add a Card</button>
    </div>
  )
}

NavBar.propTypes = {
  onViewSampleCardsClick: PropTypes.func,
  onAddCardClick: PropTypes.func,
  onInstructionsClick: PropTypes.func,
  onViewUserCardsClick: PropTypes.func,
}

export default NavBar;