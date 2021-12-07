import React from 'react';

function Header() {
  const headerStyle = {
    width: '100%',
    height: '86px',
    backgroundColor: 'white',
    color: 'black',
    verticalAlign: 'middle',
    lineHeight:'86px'
  }
  return (
    <div style={headerStyle}>
      <h3>Card Rolodex</h3>
    </div>
  )
}

export default Header;