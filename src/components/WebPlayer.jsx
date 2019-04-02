import React, { Component } from "react";

export default class WebPlayer extends Component {
  render() {
    return (
      <div>
        <iframe
          title="Moodify Webplayer"
          src="https://open.spotify.com/embed/user/ib1uemyse1f83/playlist/3EgGjX0u0AYi2P7TUJDccA"
          width="maxwidth"
          height="maxheight"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    );
  }
}
