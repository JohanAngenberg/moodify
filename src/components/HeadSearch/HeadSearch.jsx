import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import getPlaylistId from "../../utilities/getPlaylistId.js";

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
    console.log(playlistId);
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
    console.log(this.state.isVisible);
    return (
      <div>
        <br />
        <h1 className='header'>Moodify</h1>
        <input
          ref="inputUrl"
          className='input-field'
          type="text"
          placeholder="Enter Spotify playlist link..."
          value={this.state.input}
          onChange={this.handleInputTextChange.bind(this)}
          onKeyDown={this.handleKeyPress.bind(this)}
          onClick={this.handleOnClick.bind(this)}
        />
        <Button variant='info' onClick={this.onToggleModal.bind(this)}>?</Button>
        {this.state.isVisible &&
          <p className='error-message'>Oops, no data could be fetched. Please enter a valid playlist link.</p>}
      </div>
    );
  }
}

export default HeadSearch;

