import React from 'react';
import logo from './bg.png';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-slide-text"><b>Welcome to my Galaxy</b></h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Home;
