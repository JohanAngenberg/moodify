import React, { Component } from 'react';
import './App.css';
import Tracklist from './components/Tracklist';
import HeadSearch from "./components/HeadSearch";

class App extends Component {
  render() {
    return (
      <div>
        <Tracklist></Tracklist>
      </div>
    );
  }
}


export default App;