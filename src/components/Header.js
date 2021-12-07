import React from 'react';

function Header() {
  const headerStyle = {
    width: '100%',
    height: '86px',
    backgroundColor: 'white',
    color: 'black',
    position: 'fixed',
    top: '0',
    left:'0'
  }
  return (
    <div style={headerStyle}>
      <h3>Card Rolodex</h3>
      <p>Create your own TCG playing cards!</p>
    </div>
  )
}

export default Header;