import React, { Component } from "react";

export default class WebPlayer extends Component {
  render() {
    return (
      <div>
        <iframe
          title="Moodify Webplayer"
          src="https://open.spotify.com/embed/user/caaakeeey/playlist/6QAKnenuZoowNqxRzZbeRg"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    );
  }
}
