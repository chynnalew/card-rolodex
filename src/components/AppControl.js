import React from "react";
import Header from "./Header";
import CardList from "./cardComponents/CardList";
import NewCardForm from "./cardComponents/NewCardForm";
import NavBar from "./NavBar";
import { getSampleCards } from "./cardComponents/SampleCardList";
import EditCard from "./cardComponents/EditCard";
import ViewSampleCardList from "./cardComponents/ViewSampleCardList";
import DeleteConfirm from "./cardComponents/DeleteConfirm";
import firebase from "firebase";

class AppControl extends React.Component {
  constructor() {
    super();

    this.state = {
      sampleListIsVisible: false,
      userListIsVisible: false,
      formIsVisible: true,
      editFormIsVisible: false,
      instructionsAreVisible: false,
      selectedCard: null,
      editingCard: null,
      sampleCardList: getSampleCards(),
      userCardList: [
        {
          name: "Tom2",
          level: "51",
          description: "That other dude",
          attack1: "Big Attack",
          attack1Stats: "10 attack",
          attack1Description: "do the attack",
          attack2: "Big Heals",
          attack2Stats: "20 heal",
          attack2Description: "Heal yourself 20 hp",
          id: "51",
        },
      ],
    };
  }

  handleInstructionsClick = () => {
    this.setState({
      sampleListIsVisible: false,
      userListIsVisible: false,
      formIsVisible: false,
      editFormIsVisible: false,
      instructionsAreVisible: true,
    });
  };

  handleViewSampleCardsClick = () => {
    this.setState({
      sampleListIsVisible: true,
      userListIsVisible: false,
      formIsVisible: false,
      editFormIsVisible: false,
      instructionsAreVisible: false,
    });
  };

  handleViewUserCardsClick = () => {
    this.setState({
      sampleListIsVisible: false,
      userListIsVisible: true,
      formIsVisible: false,
      editFormIsVisible: false,
      instructionsAreVisible: false,
    });
  };

  handleAddCardClick = () => {
    this.setState({
      sampleListIsVisible: false,
      userListIsVisible: false,
      formIsVisible: true,
      editFormIsVisible: false,
      instructionsAreVisible: false,
    });
  };

  handleAddNewCard = () => {
    this.setState({
      sampleListIsVisible: false,
      userListIsVisible: true,
      formIsVisible: false,
      editFormIsVisible: false,
      instructionsAreVisible: false,
    });
  };

  handleEditClick = (id) => {
    firebase
      .firestore()
      .collection("cards")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        async function setArr() {
          querySnapshot.forEach((card) => arr.push(card.data()));
        }
        setArr().then((cardList) => {
          cardList = arr;
          let selectedCard = cardList.filter((card) => card.id === id)[0];
          return this.setState({
            editingCard: selectedCard,
            sampleListIsVisible: false,
            userListIsVisible: false,
            formIsVisible: false,
            editFormIsVisible: true,
            instructionsAreVisible: false,
          });
        });
      });
  };

  handleEditForm = () => {
    this.setState({
      sampleListIsVisible: false,
      userListIsVisible: true,
      formIsVisible: false,
      editFormIsVisible: false,
      instructionsAreVisible: false,
    });
  };

  handleDeleteCardClick = (inputCard) => {
    firebase
      .firestore()
      .collection("cards")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        async function setArr() {
          querySnapshot.forEach((card) => arr.push(card.data()));
        }
        setArr().then((cardList) => {
          cardList = arr;
          let selectedCard = cardList.filter((card) => card.id === inputCard.id)[0];
          return this.setState({
            selectedCard: selectedCard,
            sampleListIsVisible: false,
            userListIsVisible: false,
            formIsVisible: false,
            editFormIsVisible: true,
            instructionsAreVisible: false,
          });
        });
      });
  };

  handleDeleted = () => {
    this.setState({
      selectedCard: null,
      sampleListIsVisible: false,
      userListIsVisible: true,
      formIsVisible: false,
      editFormIsVisible: false,
      instructionsAreVisible: false,
    });
  };

  handleGoBack = () => {
    this.setState({
      selectedCard: null,
      sampleListIsVisible: false,
      userListIsVisible: true,
      formIsVisible: false,
      editFormIsVisible: false,
      instructionsAreVisible: false,
    });
  };

  render() {
    const controlStyle = {
      width: "100vw",
    };

    let currentlyVisibleState = null;
    if (this.state.selectedCard !== null) {
      currentlyVisibleState = (
        <DeleteConfirm
          card={this.state.selectedCard}
          onDeleted={this.handleDeleted}
          onNotDeleted={this.handleGoBack}
        />
      );
    } else if (this.state.formIsVisible) {
      currentlyVisibleState = (
        <NewCardForm onNewCardClick={this.handleAddNewCard} />
      );
    } else if (this.state.sampleListIsVisible) {
      currentlyVisibleState = (
        <ViewSampleCardList cardList={this.state.sampleCardList} />
      );
    } else if (this.state.userListIsVisible) {
      currentlyVisibleState = (
        <CardList
          cardList={this.state.userCardList}
          onEditClick={this.handleEditClick}
          onDeleteClick={this.handleDeleteCardClick}
        />
      );
    } else if (this.state.editFormIsVisible) {
      currentlyVisibleState = (
        <EditCard
          card={this.state.editingCard}
          onEditCardSubmit={this.handleEditForm}
        />
      );
    }
    return (
      <div className="app-control">
        <Header />
        <NavBar
          onViewSampleCardsClick={this.handleViewSampleCardsClick}
          onAddCardClick={this.handleAddCardClick}
          onInstructionsClick={this.handleInstructionsClick}
          onViewUserCardsClick={this.handleViewUserCardsClick}
        />
        <div style={controlStyle}>{currentlyVisibleState}</div>
      </div>
    );
  }
}

export default AppControl;
