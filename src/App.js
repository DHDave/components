import React, { Component } from 'react';
import Player from './Player/Player';
import John from './Player/Images/John.jpeg';
import TD from './Player/Images/TD.jpeg';
import Brian from './Player/Images/Brian.jpeg';
import Joel from './Player/Images/Joel.jpeg';
import Joyce from './Player/Images/Joyce.jpeg';
import Rob from './Player/Images/Rob.jpeg';

import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = { selectedPlayer: '' };
  }

  setSelectedPlayer (playerName) {
    this.setState({selectedPlayer: playerName });
  }

  render() {
    return (
      <div className="App">
        <div className='selectedPlayerMessage'>
          <h3>You selected: 
            {this.state.selectedPlayer}
          </h3>
        </div>
        <Player 
          name='TD' score ='58' avatar={TD}
          onPlayerSelected={playerName => this.setSelectedPlayer(playerName)}
          />
        <Player
          name='Brian' score ='88' avatar={Brian} 
          onPlayerSelected={playerName => this.setSelectedPlayer(playerName)}
          />
        <Player
          name='Joel' score ='68' avatar={Joel}
          onPlayerSelected={playerName => this.setSelectedPlayer(playerName)}
          />
        <Player
          name='John' score ='78' avatar={John} 
          message='The wind blows where it will, you hear the sound of it, but you dont know where it comes from or where t is going. So is with evryone who is born from spirit.'
          onPlayerSelected={playerName => this.setSelectedPlayer(playerName)}
          />
        <Player
          name='Joyce' score ='98' avatar={Joyce}
          onPlayerSelected={playerName => this.setSelectedPlayer(playerName)}
          />
        <Player
          name='Rob' score ='48' avatar={Rob} 
          onPlayerSelected={playerName => this.setSelectedPlayer(playerName)}
          />
      </div>
    );
  }
}

export default App;
