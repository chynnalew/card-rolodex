import React from 'react';

function Instructions() {
  const InstructionsStyle = {
    width: '60%',
    padding: '10px',
    textAlign: 'center',
    margin: 'auto'
  }
  const alignLeft = {
    textAlign: 'left'
  }
  return (
    <div style={InstructionsStyle}>
      <h1>Instructions</h1>
      <p>
        Do you want to create your own TCG cards?
        <br />
        We can help!
        <br /> <hr /> <br />
        Create fun cards with these simple instructions:
        <br /> <br />
        <ul style={alignLeft}>
          <li><strong>Need Inspiration?</strong> View a list of example cards by clicking "Examples" in the navigation bar.</li>
          <li><strong>View the Cards!</strong> Click the "Custom Cards" button in the navigation bar to view all the custom cards stored in the database.</li>
          <li><strong>Get Creative!</strong> Click the "Add a Card" button in the navigation bar. Fill out the form and hit the button at the bottom! NOTE: the image MUST be a browser URL. Find that pic online! The database is not set up to support image files.</li>
          <li><strong>Don't Like it?</strong> Navigate to the Custom cards page. Click the "Edit" button under the card you want to edit. NOTE: you must select a background on the edit screen, even if you want the background to stay the same!</li>
          <li><strong>Get outta here!</strong> Navigate to the Custom cards page. Click the "Delete" button under the card you want to delete. THIS CANNOT BE UNDONE.</li>
        </ul>
      </p>
      <hr/>
      <h2>Community Guidelines</h2>
      <p>All users have access to every card in the database.
        <br /> Please do not create cards with offensive content.
        <br /> Avoid editing or deleting cards you did not create.
        <br/> Respect each other's space in this community!
      </p>
    </div>
  )
}

export default Instructions;