import React, { Component } from 'react';
import './App.css';
import TrackList from './components/TrackList';
import HeadSearch from "./components/HeadSearch";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <HeadSearch></HeadSearch>
        </div>
        <div className="main-container">
          <div className="track-container">
            <TrackList></TrackList>
          </div>
          <div className="right-column">
            <div className="toolkit-container">
              Toolkit placeholder
            </div>
            <div className="player-container">
              Player placeholder
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;