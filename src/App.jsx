import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="searchSection">
        <h1>Search for a game</h1>
        <input type="text" placeholder="Minecraft..." />
        <button>Search game title</button>
      </div>
      <div className="dealsSection">
        <h2>Latest deals</h2>
      </div>
    </div>
  );
}

export default App;
