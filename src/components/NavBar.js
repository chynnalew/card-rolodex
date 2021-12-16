import React from 'react';
import PropTypes from 'prop-types';

function NavBar(props) {

  const navBarStyle = {
    height: '50px',
    width: '100%',
    backgroundColor: '#2f4f4f',
    textAlign: 'center',
    borderBottom: '3px #e11f70 solid',
    padding: '10px',
    position: 'sticky',
  }
  const buttonStyle = {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: 'large',
    fontWeight: 'bold',
    width:'20%'
  }

  return (
    <div style={navBarStyle}>
        <button style={buttonStyle} className='buttons' onClick={() => props.onInstructionsClick()}>Instructions</button>
        <button style={buttonStyle} className='buttons' onClick={() => props.onViewSampleCardsClick()}>Examples</button>
        <button style={buttonStyle} className='buttons' onClick={() => props.onViewUserCardsClick()}>Custom Cards</button>
        <button style={buttonStyle} className='buttons' onClick={() => props.onAddCardClick()}>Add a Card</button>
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