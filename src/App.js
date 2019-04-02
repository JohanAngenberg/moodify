import React, { Component } from "react";
import "./App.css";
import TrackList from "./components/TrackList";
import HeadSearch from "./components/HeadSearch";
import WebPlayer from "./components/WebPlayer";
import ToolKit from "./components/ToolKit"

class App extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <HeadSearch />
        </div>
        <div className="main-container">
          <div className="track-container">
            <TrackList />
          </div>
          <div className="right-column">
            <div className="toolkit-container">
              <ToolKit />
            </div>
            <div className="player-container">
              <WebPlayer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
