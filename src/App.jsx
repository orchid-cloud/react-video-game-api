import React, { useState } from 'react';
import useSWR from 'swr';
import './App.css';

const fetcher = (...args) => fetch(...args).then((response) => response.json());

function App() {
  const [gameTitle, setGameTitle] = useState('');
  const [searchedGames, setSearchedGames] = useState([]);

  const { data, error } = useSWR(
    'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3',
    fetcher
  );

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
        <div className="games">
          {data &&
            data.map((game, key) => {
              return (
                <div className="game" id="deals" key={key}>
                  <h3>{game.title}</h3>
                  <p>Normal Price: {game.normalPrice}</p>
                  <p>Deal Price: {game.salePrice}</p>
                  <h3>YOU SAVE {game.savings.substr(0, 2)}%</h3>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
