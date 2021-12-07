import React from 'react';
import Header from './Header';
import CardList from './CardList';

class AppControl extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'hi'
        },
        {
          name: 'Dracula',
          id: 'hi1'
        },
        {
          name: 'Zombie',
          id: 'hi2'
        }
      ]
    }
  }

  render() {
    return (
      <div className='app-control'>
        <Header />
        {
          this.state.monsters.map(monster =>
            <p key={monster.id}>monster: {monster.name}</p>
          )
        }
        <CardList />
      </div>
    )
  }
}

export default AppControl;