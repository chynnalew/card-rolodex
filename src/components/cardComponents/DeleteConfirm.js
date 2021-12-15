import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

function DeleteConfirm(props) {
  const buttonStyle = {
    backgroundColor: 'black',
    border: 'lightblue 2px solid',
    color: 'lightblue',
    padding: '10px',
    margin: '5px',
    marginLeft:'20px',
    width: '125px',
  }
  const buttonStyleRed = {
    backgroundColor: 'black',
    border: 'red 2px solid',
    color: 'red',
    padding: '10px',
    margin: '5px',
    marginRight:'20px',
    width: '125px',
  }

  function handleDeleteForm() {
    async function getCard() { firebase.firestore().collection('cards').doc(props.card.id).delete() }
    getCard().then( props.onDeleted())
  }
  return (
    <div>
      <h1>Are you sure you want to delete {props.card.name}?</h1>
      <button style={buttonStyle} onClick={()=>props.onNotDeleted()}>Nope! Back to Safety</button>
      <button style={buttonStyleRed} onClick={() => handleDeleteForm()}>Delete this card Forever</button>
    </div>
  )
}

DeleteConfirm.propTypes = {
  card: PropTypes.object,
  onDeleted: PropTypes.func,
  onNotDeleted: PropTypes.func,
}

export default DeleteConfirm;