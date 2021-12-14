import React from "react";
import firebase from 'firebase';
import PropTypes from 'prop-types';

function EditCard(props) {

  function handleEditForm(event) {
    event.preventDefault();
    props.onEditCardClick();
    return firebase.firestore().collection('cards').doc(props.card.id).update({
      name: event.target.name.value,
      level: event.target.level.value,
      description: event.target.description.value,
      attack1: event.target.attack1.value,
      attack1Stats: event.target.attack1Stats.value,
      attack1Description: event.target.attack1Description.value,
      attack2: event.target.attack2.value,
      attack2Stats: event.target.attack2Stats.value,
      attack2Description: event.target.attack2Description.value,
    });
  }

  
  // function handleEditTicketFormSubmission(event) {
  //   event.preventDefault();
  //   props.onEditTicket();
  //   const propertiesToUpdate = {
  //     names: event.target.names.value,
  //     location: event.target.location.value,
  //     issue: event.target.issue.value
  //   }
  //   return firestore.update({collection: 'tickets', doc: ticket.id }, propertiesToUpdate)
  // }

  return (
    <div className="editCardForm">
      <h1>Edit {props.card.name}</h1>
      <form onSubmit={handleEditForm}>
        <label>Name</label>
        <br />
        <input type="text" name="name" defaultValue={props.card.name} />
        <br /><br />
        <label>Level</label>
        <br />
        <input type="number" name="level" defaultValue={props.card.level} min="0" />
        <br /><br />
        <label>Description</label>
        <br />
        <textarea name="description" defaultValue={props.card.description} />
        <br /><br />
        <label>Move 1 Name</label>
        <br />
        <input type="text" name="attack1" defaultValue={props.card.attack1} />
        <br /><br />
        <label>Move 1 Stats</label>
        <br />
        <input type="text" name="attack1Stats" defaultValue={props.card.attack1Stats}
        />
        <br /><br />
        <label>Move 1 effects/description</label>
        <br />
        <textarea name="attack1Description" defaultValue={props.card.attack1Description} />
        <br /><br />
        <label>Move 2 Name</label>
        <br />
        <input type="text" name="attack2" defaultValue={props.card.attack2} />
        <br /><br />
        <label>Move 2 Stats</label>
        <br />
        <input type="text" name="attack2Stats" defaultValue={props.card.attack2Stats}
        />
        <br /><br />
        <label>Move 2 effects/description</label>
        <br />
        <textarea name="attack2Description" defaultValue={props.card.attack2Description} />
        <br /><br />
        <button class="hover" type="submit" >Edit Card</button >
      </form>
    </div>
  );
}

EditCard.propTypes = {
  card: PropTypes.object,
  onEditCardSubmit: PropTypes.func
}

export default EditCard;
