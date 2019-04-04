import React, { Component } from "react";

export default class WebPlayer extends Component {
  render() {
    const URL = `https://open.spotify.com/embed/playlist/${
      this.props.playlistUri
      }`;
    return (
      <div style={{ width: '640px', margin: '0 auto' }}>
        <iframe
          title="Moodify Webplayer"
          src={URL}
          width="640"
          height="80"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    );
  }
}
