import React, { Component } from "react";
import getPlaylistId from "../../utilities/getPlaylistId.js";

class HeadSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: [],
      filterInput: "",
      playlist: [],
      errorMessIsVisible: false,
      inputType: 'listInput'
    };
  }

  getData(value) {
    fetch(`http://moodify.sebastianberglonn.se/audio-features/${value}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.length !== 0) {
          // console.log('Data finns');
          this.setState({ errorMessIsVisible: false })
          return res;
        } else {
          // console.log('Felhantering!');
          this.setState({ errorMessIsVisible: true })
        }
      })
      // .then(res => console.log(res))
      .then(res => {
        this.setState({ playlist: res });
      })
      .then(() => this.props.playlist(this.state.playlist))
    if (this.state.playlist) {
      this.props.hideLanding()
    }
  }

  handleSelectPlaylist(e) {
    if (e.target.value) {
      this.props.playlistUri(e.target.value);
      this.getData(e.target.value)
    }
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.playlistUri(this.state.filterInput);
      // console.log(this.state.filterInput);
      this.getData(this.state.filterInput)

    }
  }

  handleRadio(e) {
    this.setState({ inputType: e.target.value })
  }

  handleInputTextChange(e) {
    let playlistId = getPlaylistId(e.target.value);
    console.log(playlistId);
    this.setState({ filterInput: playlistId });
  }

  handleOnClick(e) {
    e.target.value = '';
    this.setState({ errorMessIsVisible: false });
  }

  onToggleModal() {
    this.props.toggleModal()
  }

  reloadPage() {
    window.location.reload()
  }

  render() {
    // console.log(this.state.errorMessIsVisible);
    const playlists = this.props.userPlaylists.map(playlist => (
      <option value={playlist.uri}>{playlist.name}</option>
    ))
    const inputOptions = [
      { value: 'listInput', displayValue: 'Select playlist' },
      { value: 'textInput', displayValue: 'Enter playlistlink' }
    ]
    return (
      <div>
        {!window.location.search.replace('?access_token', '') ?
          <div>
            <img className='question-mark-img' src='./Info-questionmark.png' onClick={this.onToggleModal.bind(this)} alt='Info' />
            <h1 className={`header ${this.props.showLanding && 'landingStyle'}`}>Moodify</h1>
            <div><p onClick={() => window.location = 'http://moodify.sebastianberglonn.se/login'} className='loginButton'>Login with Spotify <i className="fab fa-spotify"></i></p></div>
          </div> : <div>
            <img className='question-mark-img' src='./Info-questionmark.png' onClick={this.onToggleModal.bind(this)} alt='Info' />
            <h1 onClick={() => this.reloadPage()} className={`header ${this.props.showLanding && 'landingStyle'}`}>Moodify</h1>
            <div>
              {inputOptions.map(option => (
                <div className="radioWrapper">
                  <input type="radio"
                    value={option.value}
                    checked={this.state.inputType === option.value}
                    onChange={this.handleRadio.bind(this)}
                  />
                  <label>{option.displayValue}</label>
                </div>
              ))}
            </div>

            {this.state.inputType === 'listInput' ?
              <select className='input-field' onChange={this.handleSelectPlaylist.bind(this)}>
                <option value="">Select playlist...</option>
                {playlists}
              </select> :
              <input
                ref="inputUrl"
                className='input-field'
                type="text"
                placeholder="Enter Spotify playlist link..."
                value={this.state.input}
                onChange={this.handleInputTextChange.bind(this)}
                onKeyDown={this.handleKeyPress.bind(this)}
                onClick={this.handleOnClick.bind(this)}
              />}
            <p className='error-message' style={{ visibility: this.state.errorMessIsVisible ? 'visible' : 'hidden' }}>Oops, no data could be fetched. Please enter a valid playlist link.</p>
          </div>}
      </div>
    );
  }
}

export default HeadSearch;

