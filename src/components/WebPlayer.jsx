import React, { Component } from "react";

export default class WebPlayer extends Component {
  render() {
    const URL = `https://open.spotify.com/embed/playlist/${
      this.props.playlistUri
    }`;
    return (
      <div>
        {this.props.playlistUri ? (
          <iframe
            title="Moodify Webplayer"
            src={URL}
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        ) : null}
      </div>
    );
  }
}
