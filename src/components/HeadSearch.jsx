import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import getPlaylistId from "../utilities/getPlaylistId.js";

const styleSearchBar = {
  height: "30px",
  width: "800px",
  paddingLeft: '5px',
  border: 'none',
  borderRadius: '3px',
};

const styleErrorMessage = {
  color: 'red',
};

const styleHeader = {
  fontFamily: 'Bungee',
  color: 'white',
  fontSize: '5em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  paddingBottom: '10px',
}

class HeadSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: [],
      filterInput: "",
      playlist: [],
      isVisible: false,
    };
  }


  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.playlistUri(this.state.filterInput);
      // console.log(this.state.filterInput);

      fetch(`http://localhost:3001/audio-features/${this.state.filterInput}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.length !== 0) {
            // console.log('Data finns');
            return res;
          } else {
            // console.log('Felhantering!');
            this.setState({ isVisible: true })
          }
        })
        // .then(res => console.log(res))
        .then(res => {
          this.setState({ playlist: res });
        })
        .then(this.props.playlist(this.state.playlist));
    }
  }

  handleInputTextChange(e) {
    let playlistId = getPlaylistId(e.target.value);
    // console.log(playlistId);
    this.setState({ filterInput: playlistId });
  }

  handleOnClick(e) {
    e.target.value = '';
    this.setState({ isVisible: false });
  }

  onToggleModal() {
    this.props.toggleModal()
  }

  render() {
    return (
      <div>
        <br />
        <h1 style={styleHeader}>Moodify</h1>
        <input
          ref="inputUrl"
          style={styleSearchBar}
          type="text"
          placeholder="Enter Spotify playlist link..."
          value={this.state.input}
          onChange={this.handleInputTextChange.bind(this)}
          onKeyDown={this.handleKeyPress.bind(this)}
          onClick={this.handleOnClick.bind(this)}
        />
        <Button variant='info' onClick={this.onToggleModal.bind(this)}>?</Button>
        {this.state.isVisible &&
          <p style={styleErrorMessage}>Oops, no data could be fetched. Please enter a valid playlist link.</p>}
      </div>
    );
  }
}

export default HeadSearch;

