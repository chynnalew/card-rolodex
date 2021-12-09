import React from "react";
import Header from "./Header";
import CardList from "./CardList";
import NewCardForm from "./NewCardForm";
import NavBar from "./NavBar";
import { getSampleCards } from "./SampleCardList";
import EditCard from "./EditCard";
import ViewSampleCardList from "./ViewSampleCardList";
import DeleteConfirm from "./DeleteConfirm";

class AppControl extends React.Component {
  constructor() {
    super();

    this.state = {
      sampleListIsVisible: true,
      userListIsVisible: false,
      formIsVisible: false,
      editFormIsVisible: false,
      instructionsAreVisible: false,
      selectedCard: null,
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

  handleEditClick = (id) => {
    const selectedCard = this.state.userCardList.filter(
      (card) => card.id === id
    )[0];
    this.setState({
      selectedCard: selectedCard,
      sampleListIsVisible: false,
      userListIsVisible: false,
      formIsVisible: false,
      editFormIsVisible: true,
      instructionsAreVisible: false,
    });
  };

  handleEditForm = (inputCard) => {
    const editedCardList = this.state.userCardList
      .filter((card) => card.id !== this.state.selectedCard.id)
      .concat(inputCard);
    this.setState({
      userCardList: editedCardList,
      sampleListIsVisible: false,
      userListIsVisible: false,
      formIsVisible: true,
      editFormIsVisible: false,
      deleteConfirmVisible: false,
      instructionsAreVisible: false,
    });
  };

  handleInstructionsClick = () => {
    this.setState({
      sampleListIsVisible: false,
      userListIsVisible: false,
      formIsVisible: false,
      editFormIsVisible: false,
      instructionsAreVisible: true,
    });
  };

  handleAddNewCard = (newCard) => {
    const newCardList = this.state.userCardList.concat(newCard);
    this.setState({
      userCardList: newCardList,
      sampleListIsVisible: false,
      userListIsVisible: true,
      formIsVisible: false,
      editFormIsVisible: false,
      instructionsAreVisible: false,
    });
  };

  handleDeleteCardClick = (inputCard) => {
    const selectedCard = this.state.userCardList.filter(
      (card) => card.id === inputCard.id
    )[0];
    this.setState({
      selectedCard: selectedCard,
    });
  };

  handleDeleted = (id) => {
    const newCardList = this.state.userCardList.filter(
      (card) => card.id !== id
    );
    this.setState({
      userCardList: newCardList,
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
    })
  }

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
          onDeleteClick={this.handleDeleteCardClick}
        />
      );
    } else if (this.state.editFormIsVisible) {
      currentlyVisibleState = (
        <EditCard
          card={this.state.selectedCard}
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
