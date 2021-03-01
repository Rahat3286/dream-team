import React, { useState, useEffect } from 'react';
import './App.css';
import Player from './components/Player';
import Squad from './components/Squad/Squad';

function App() {
  const [players, setPlayers] = useState([]);
  const [squad, setSquad] = useState([]);

  useEffect(() => {
    fetch(`https://api.mocki.io/v1/b119d75d`)
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.log(error))
  }, [])

  const handleAddPlayer = (player) => {
    const newSquad = [...squad, player];
    setSquad(newSquad);
  };
  return (
    <div className="App">
      <h1>Players in the Team: {players.length}</h1>
      <p><b>Selected Players :</b> {squad.length}</p>
      <Squad squad={squad}></Squad>
      {
        players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>)
      }
    </div>
  );
}

export default App;
