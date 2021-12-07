import React from "react";
import { v4 } from 'uuid';

function NewCardForm(props) {

  function handleFormSubmission(event) {
    event.preventDefault();
    props.onFormSubmission({
      name: event.target.name.value,
      level: event.target.level.value,
      description: event.target.description.value,
      attack1: event.target.attack1.value,
      attack1Stats: event.target.attack1Stats.value,
      attack1Description: event.target.attack1Description.value,
      attack2: event.target.attack2.value,
      attack2Stats: event.target.attack2Stats.value,
      attack2Description: event.target.attack2Description,
      id: v4()
    })
  }

  return (
    <div className="newCardForm">
      <h1>Add a card</h1>
      <form onSubmist={handleFormSubmission}>
        <label>Name</label>
        <br />
        <input type="text" name="name" placeholder="Card Name" />
        <br />
        <label>Level</label>
        <br />
        <input type="number" name="level" placeholder="level" min="0" />
        <br />
        <label>Description</label>
        <br />
        <textarea name="description" placeholder="Description" />
        <br />
        <label>Move 1 Name</label>
        <br />
        <input type="text" name="attack1" placeholder="move 1" />
        <br />
        <label>Move 1 Stats</label>
        <br />
        <input
          type="text"
          name="attack1Stats"
          placeholder="move 1 status effect"
        />
        <br />
        <label>Move 1 effects/description</label>
        <br />
        <textarea name="attack1Description" placeholder="Description" />
        <br />
        <label>Move 2 Name</label>
        <br />
        <input type="text" name="attack2" placeholder="move 2" />
        <br />
        <label>Move 2 Stats</label>
        <br />
        <input
          type="text"
          name="attack2Stats"
          placeholder="move 2 status effect"
        />
        <br />
        <label>Move 2 effects/description</label>
        <br />
        <textarea name="attack2Description" placeholder="Attack 2 Description" />
        <br />
        <button class="hover" type="submit" >Add Card</button >
      </form>
    </div>
  );
}

export default NewCardForm;
