import React, { Component } from "react";
import getPlaylistId from '../utilities/getPlaylistId.js'

const styleSearchBar = {
  height: "30px",
  width: "400px",
  border: "1px solid black"
};

class HeadSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: [],
      filterInput: "",
      playlistUri: [],
      playlist: [],
    };
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.playlistUri(this.state.filterInput);

      fetch(`http://localhost:3001/audio-features/${this.state.filterInput}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({ playlist: res })
        }).then(this.props.playlist(this.state.playlist))

    }
  }

  handleInputTextChange(e) {
    let playlistId = getPlaylistId(e.target.value);
    // this.setState({ filterInput: e.target.value });
    this.setState({ filterInput: playlistId });
  }

  render() {
    return (
      <div>
        <br />
        <h1>Moodify</h1>
        <input
          ref="inputUri"
          style={styleSearchBar}
          type="text"
          placeholder="Enter playlist URI..."
          value={this.state.input}
          onChange={this.handleInputTextChange.bind(this)}
          onKeyDown={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default HeadSearch;
