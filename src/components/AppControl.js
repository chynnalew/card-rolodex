import React from 'react';
import Header from './Header';
import CardList from './CardList';
import NewCardForm from './NewCardForm';

class AppControl extends React.Component {
  constructor() {
    super();

    this.state = {
      listIsVisible: true,
      formIsVisible: true,
    }
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.formIsVisible) {
      currentlyVisibleState = <NewCardForm />
    }else if (this.state.listIsVisible) {
      currentlyVisibleState = <CardList />
    }
    return (
      <div className='app-control'>
        <Header />
        {currentlyVisibleState}
      </div>
    )
  }
}

export default AppControl;