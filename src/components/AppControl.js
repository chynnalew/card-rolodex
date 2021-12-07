import React from "react";
import Header from "./Header";
import CardList from "./CardList";
import NewCardForm from "./NewCardForm";
import NavBar from "./NavBar";
import { getSampleCards } from "./SampleCardList";

class AppControl extends React.Component {
  constructor() {
    super();

    this.state = {
      sampleListIsVisible: true,
      userListIsVisible:false,
      formIsVisible: false,
      instructionsAreVisible: false,
      sampleCardList: getSampleCards(),
      userCardList: [],
    };
  }

  handleViewSampleCardsClick = () => {
    this.setState({
      sampleListIsVisible: true,
      userListIsVisible:false,
      formIsVisible: false,
      instructionsAreVisible: false,
    });
  };

  handleViewUserCardsClick = () => {
    this.setState({
      sampleListIsVisible: false,
      userListIsVisible: true,
      formIsVisible: false,
      instructionsAreVisible: false,
    });
  };

  handleAddCardClick = () => {
    this.setState({
      sampleListIsVisible: false,
      userListIsVisible:false,
      formIsVisible: true,
      instructionsAreVisible: false,
    });
  };

  handleInstructionsClick = () => {
    this.setState({
      sampleListIsVisible: false,
      userListIsVisible:false,
      formIsVisible: false,
      instructionsAreVisible: true,
    });
  };

  handleAddNewCard = (newCard) => {
    const newCardList = this.state.cardList.concat(newCard);
    this.setState({
      cardList: newCardList,
      sampleListIsVisible: false,
      userListIsVisible:true,
      formIsVisible: false,
      instructionsAreVisible: false,

    });
  };

  render() {
    const controlStyle = {
      width: "100vw",
      marginTop: "10px",
    };

    let currentlyVisibleState = null;
    if (this.state.formIsVisible) {
      currentlyVisibleState = <NewCardForm />;
    } else if (this.state.sampleListIsVisible) {
      currentlyVisibleState = (
        <CardList cardList={this.state.sampleCardList} />
      );
    } else if (this.state.userListIsVisible) {
      currentlyVisibleState = (
        <CardList cardList={this.state.userCardList} />
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
