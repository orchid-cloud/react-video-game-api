import React, { useState } from 'react';
import './App.css';

function App() {
  const [gameTitle, setGameTitle] = useState('');
  const [searchedGames, setSearchedGames] = useState([]);

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
      .then((response) => response.json())
      .then((data) => {
        setSearchedGames(data);
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
        <div className="games">
          {searchedGames.map((game, key) => {
            return (
              <div className="game" key={key}>
                {game.external}
                <img src={game.thumb} alt="" />
                {game.cheapest}
              </div>
            );
          })}
        </div>
      </div>
      <div className="dealsSection">
        <h2>Latest deals</h2>
      </div>
    </div>
  );
}

export default App;
