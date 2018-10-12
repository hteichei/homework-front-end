import React, { Component } from 'react';
import './App.css';
import GifList from '../GifList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GifList />
      </div>
    );
  }
}

export default App;
