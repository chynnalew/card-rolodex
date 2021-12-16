import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import firebase from "firebase";
import { Form, Container, Button } from "semantic-ui-react";
import black from "../../img/backgrounds/black.jpeg";
import blue from "../../img/backgrounds/blue.jpeg";
import bluePurple from "../../img/backgrounds/bluePurple.jpeg";
import green from "../../img/backgrounds/green.jpeg";
import pink from "../../img/backgrounds/pink.jpeg";
import purple from "../../img/backgrounds/purple.jpeg";
import red from "../../img/backgrounds/red.jpeg";
import redGreen from "../../img/backgrounds/redGreen.jpeg";
import yellow from "../../img/backgrounds/yellow.jpeg";

function NewCardForm(props) {
  function addCardToFirestore(event) {
    event.preventDefault();
    props.onNewCardClick();

    const setId = v4();
    return firebase.firestore().collection("cards").doc(setId).set({
      name: event.target.name.value,
      level: event.target.level.value,
      img: event.target.img.value,
      description: event.target.description.value,
      attack1: event.target.attack1.value,
      attack1Stats: event.target.attack1Stats.value,
      attack1Description: event.target.attack1Description.value,
      attack2: event.target.attack2.value,
      attack2Stats: event.target.attack2Stats.value,
      attack2Description: event.target.attack2Description.value,
      textColor: event.target.textColor.value,
      borderColor: event.target.borderColor.value,
      background: event.target.background.value,
      id: setId,
    });
  }

  const formStyle = {
    color: "white",
    fontSize: "20px",
  };

  const imageSize = {
    width: "100px",
    height: "100px",
    margin:'10px',
  };

  return (
    <Container>
      <Form onSubmit={addCardToFirestore}>
        <h1>Add a card</h1>
        <Form.Group widths="equal">
          <Form.Field>
            <label style={formStyle}>Name</label>
            <input placeholder="Name" name="name" type="text" />
          </Form.Field>
          <Form.Field>
            <label style={formStyle}>Level</label>
            <input type="number" name="level" placeholder="Level" min="0" />
          </Form.Field>
        </Form.Group>
        <div class="ui divider"></div>
        <Form.Field>
          <label style={formStyle}>Image</label>
          <input placeholder="Image url" name="img" type="text" />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field>
            <label style={formStyle}>Description</label>
            <input name="description" placeholder="Description" />
          </Form.Field>
        </Form.Group>
        <div class="ui divider"></div>
        <h3>Move 1</h3>
        <Form.Group widths="equal">
          <Form.Field>
            <label style={formStyle}>Name</label>
            <input type="text" name="attack1" placeholder="Move 1" />
          </Form.Field>
          <Form.Field>
            <label style={formStyle}>Description</label>
            <input name="attack1Description" placeholder="Description" />
          </Form.Field>
          <Form.Field>
            <label style={formStyle}>Stat Modifier</label>
            <input
              type="number"
              name="attack1Stats"
              placeholder="Move 1 status effect"
              min="0"
            />
          </Form.Field>
        </Form.Group>
        <div class="ui divider"></div>
        <h3>Move 2</h3>
        <Form.Group widths="equal">
          <Form.Field>
            <label style={formStyle}>Name</label>
            <input type="text" name="attack2" placeholder="Move 2" />
          </Form.Field>
          <Form.Field>
            <label style={formStyle}>Description</label>
            <input
              placeholder="Description"
              name="attack2Description"
              type="text"
            />
          </Form.Field>
          <Form.Field>
            <label style={formStyle}>Stat Modifier</label>
            <input
              name="attack2Stats"
              placeholder="Move 2 status effect"
              type="number"
              min="0"
            />
          </Form.Field>
        </Form.Group>
        <div class="ui divider"></div>
        <Form.Group widths="equal">
          <Form.Field>
            <label style={formStyle}>Text Color</label>
            <input name="textColor" type="color" />
          </Form.Field>
          <Form.Field>
            <label style={formStyle}>Border Color</label>
            <input name="borderColor" type="color" />
          </Form.Field>
        </Form.Group>
        <div class="ui divider"></div>
        <h3> Background Image </h3>
        <label>
          <input type="radio" name="background" value="black" />
            <img src={black} style={imageSize} alt=" "/>
        </label>
        <label>
          <input type="radio" name="background" value="blue" />
            <img src={blue} style={imageSize} alt=""/>
        </label>
        <label>
          <input type="radio" name="background" value="bluePurple" />
            <img src={bluePurple} style={imageSize} alt=""/>
        </label>
        <label>
          <input type="radio" name="background" value="green" />
            <img src={green} style={imageSize} alt=""/>
        </label>
        <label>
          <input type="radio" name="background" value="pink" />
            <img src={pink} style={imageSize} alt=""/>
        </label>
        <label>
          <input type="radio" name="background" value="purple" />
            <img src={purple} style={imageSize} alt=""/>
        </label>
        <label>
          <input type="radio" name="background" value="red" />
            <img src={red} style={imageSize} alt=""/>
        </label>
        <label>
          <input type="radio" name="background" value="redGreen"/>
            <img src={redGreen} style={imageSize} alt=""/>
        </label>
        <label>
          <input type="radio" name="background" value="yellow"/>
            <img src={yellow} style={imageSize} alt=""/>
        </label>

        <Form.Field control={Button} type="submit">
          Add Card
        </Form.Field>
        {/* <button class="hover" type="submit">
          
        </button> */}
      </Form>
    </Container>
  );
}

NewCardForm.propTypes = {
  onNewCardClick: PropTypes.func,
};

export default NewCardForm;
