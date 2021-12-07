import React from 'react';
import Header from './Header';
import CardList from './CardList';
import NewCardForm from './NewCardForm';
import NavBar from './NavBar';

class AppControl extends React.Component {
  constructor() {
    super();

    this.state = {
      listIsVisible: true,
      formIsVisible: false,
      instructionsAreVisible: false,
    }
  }

  handleViewCardsClick = () => {
    this.setState({
      listIsVisible: true,
      formIsVisible: false,
      instructionsAreVisible: false,
    })
  }

  handleAddCardClick = () => {
    this.setState({
      listIsVisible: false,
      formIsVisible: true,
      instructionsAreVisible: false,
    })
  }

  handleInstructionsClick = () => {
    this.setState({
      listIsVisible: false,
      formIsVisible: false,
      instructionsAreVisible: true,
    })
  }

  

  render() {
    const controlStyle = {
      width: '100vw',
      marginTop: '10px',
    }

    let currentlyVisibleState = null;
    if (this.state.formIsVisible) {
      currentlyVisibleState = <NewCardForm />
    }else if (this.state.listIsVisible) {
      currentlyVisibleState = <CardList />
    }
    return (
      <div className='app-control'>
        <Header />
        <NavBar
          onViewCardsClick={this.handleViewCardsClick}
          onAddCardClick={this.handleAddCardClick}
          onInstructionsClick={this.handleInstructionsClick}/>
        <div style={controlStyle}>{currentlyVisibleState}</div>
      </div>
    )
  }
}

export default AppControl;