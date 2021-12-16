import React from 'react';

function Header() {
  const headerStyle = {
    width: '100%',
    height: '86px',
    backgroundColor: '#49a981',
    color: 'black',
    verticalAlign: 'middle',
    lineHeight: '86px',
    fontSize: '30px'
  }
  return (
    <div>
      <h3 style={headerStyle}>TCG CARD CREATOR</h3>
    </div>
  )
}

export default Header;