import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import firebase from 'firebase';

function NewCardForm(props) {

  function addCardToFirestore(event) {
    event.preventDefault();
    props.onNewCardClick();
    const setId = v4();
    return firebase.firestore().collection('cards').doc(setId).set({
      name: event.target.name.value,
      level: event.target.level.value,
      description: event.target.description.value,
      attack1: event.target.attack1.value,
      attack1Stats: event.target.attack1Stats.value,
      attack1Description: event.target.attack1Description.value,
      attack2: event.target.attack2.value,
      attack2Stats: event.target.attack2Stats.value,
      attack2Description: event.target.attack2Description.value,
      id: setId
    });
  }

  return (
    <div className="newCardForm">
      <h1>Add a card</h1>
      <form onSubmit={addCardToFirestore}>
        <label>Name</label>
        <br />
        <input type="text" name="name" placeholder="Card Name" />
        <br /><br />
        <label>Level</label>
        <br />
        <input type="number" name="level" placeholder="level" min="0" />
        <br /><br />
        <label>Description</label>
        <br />
        <textarea name="description" placeholder="Description" />
        <br /><br />
        <label>Move 1 Name</label>
        <br />
        <input type="text" name="attack1" placeholder="move 1" />
        <br /><br />
        <label>Move 1 Stats</label>
        <br />
        <input type="text" name="attack1Stats" placeholder="move 1 status effect"/>
        <br /><br />
        <label>Move 1 effects/description</label>
        <br />
        <textarea name="attack1Description" placeholder="Description" />
        <br /><br />
        <label>Move 2 Name</label>
        <br />
        <input type="text" name="attack2" placeholder="move 2" />
        <br /><br />
        <label>Move 2 Stats</label>
        <br />
        <input type="text" name="attack2Stats" placeholder="move 2 status effect"/>
        <br /><br />
        <label>Move 2 effects/description</label>
        <br />
        <textarea name="attack2Description" placeholder="Attack 2 Description" />
        <br /><br />
        <button class="hover" type="submit" >Add Card</button >
      </form>
    </div>
  );
}

NewCardForm.propTypes = {
  onNewCardClick: PropTypes.func
}

export default NewCardForm;
