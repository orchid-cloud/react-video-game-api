import React, { useState } from 'react';
import './App.css';

function App() {
  const [gameTitle, setGameTitle] = useState('');

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="App">
      <div className="searchSection">
        <h1>Search for a game</h1>
        <input
          type="text"
          placeholder="Minecraft..."
          onChange={(event) => {
            setGameTitle(event.target.value);
          }}
        />
        <button onClick={searchGame}>Search game title</button>
      </div>
      <div className="dealsSection">
        <h2>Latest deals</h2>
      </div>
    </div>
  );
}

export default App;
