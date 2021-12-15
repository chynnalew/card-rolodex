import React from 'react';

function Header() {
  const headerStyle = {
    width: '100%',
    height: '86px',
    backgroundColor: 'white',
    color: 'black',
    verticalAlign: 'middle',
    lineHeight: '86px',
    fontFamily: "'Courier New', Courier, monospace"
  }
  return (
    <div>
      <h3 style={headerStyle}>Card Rolodex</h3>
    </div>
  )
}

export default Header;