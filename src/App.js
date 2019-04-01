import React, { Component } from 'react';
import './App.css';
import Songlist from './components/Songlist';

class App extends Component {
  render() {
    return (
      <div>
        <Songlist></Songlist>
      </div>
    );
  }
}

export default App;

