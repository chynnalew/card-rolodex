import React from 'react';

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
        {
          this.state.monsters.map(monster =>
            <p key={monster.id}>monster: {monster.name}</p>
          )
        }
      </div>
    )
  }
}

export default AppControl;