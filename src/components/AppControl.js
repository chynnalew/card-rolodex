import React from "react";
import Header from "./Header";
import CardList from "./CardList";
import NewCardForm from "./NewCardForm";
import NavBar from "./NavBar";
import { getSampleCards } from "./SampleCardList";
import EditCard from "./EditCard";
import ViewSampleCardList from "./ViewSampleCardList";

class AppControl extends React.Component {
  constructor() {
    super();

    this.state = {
      sampleListIsVisible: true,
      userListIsVisible:false,
      formIsVisible: false,
      editFormIsVisible: false,
      instructionsAreVisible: false,
      selectedCard: null,
      sampleCardList: getSampleCards(),
      userCardList: [],
    };
  }

  handleViewSampleCardsClick = () => {
    this.setState({
      sampleListIsVisible: true,
      userListIsVisible:false,
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
      userListIsVisible:false,
      formIsVisible: true,
      editFormIsVisible: false,
      instructionsAreVisible: false,
    });
  };

  handleEditClick = (id) => {
    const selectedCard = this.state.userCardList.filter(card => card.id === id)[0];
    this.setState({
      selectedCard: selectedCard,
      sampleListIsVisible: false,
      userListIsVisible:false,
      formIsVisible: false,
      editFormIsVisible: true,
      instructionsAreVisible: false,
    });
  }

  handleEditForm = (inputCard) => {
    const editedCardList = this.state.userCardList.filter(card => card.id !== this.state.selectedCard.id).concat(inputCard);
    this.setState({
      userCardList: editedCardList,
      sampleListIsVisible: false,
      userListIsVisible:false,
      formIsVisible: true,
      editFormIsVisible: false,
      instructionsAreVisible: false,
    });
  }

  handleInstructionsClick = () => {
    this.setState({
      sampleListIsVisible: false,
      userListIsVisible:false,
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
      userListIsVisible:true,
      formIsVisible: false,
      editFormIsVisible: false,
      instructionsAreVisible: false,
    });
  };

  handleDeleteCard = (id) => {
    const newUserCardList = this.state.userCardList.filter(card => card.id !== id);
    this.setState({
      userCardList: newUserCardList,
      sampleListIsVisible: false,
      userListIsVisible:true,
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
    if (this.state.formIsVisible) {
      currentlyVisibleState = <NewCardForm onNewCardClick={this.handleAddNewCard}/>;
    } else if (this.state.sampleListIsVisible) {
      currentlyVisibleState = <ViewSampleCardList cardList={this.state.sampleCardList} onDeleteClick={this.handleDeleteCard}/>
    } else if (this.state.userListIsVisible) {
      currentlyVisibleState =  <CardList cardList={this.state.userCardList} onDeleteClick={this.handleDeleteCard}/>
    } else if (this.state.editFormIsVisible){
      currentlyVisibleState = <EditCard card={this.state.selectedCard} onEditCardSubmit={this.handleEditForm}/>
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
