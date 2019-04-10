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
    };
  }


  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.playlistUri(this.state.filterInput);
      // console.log(this.state.filterInput);

      fetch(`http://moodify.sebastianberglonn.se/audio-features/${this.state.filterInput}`)
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
            <p className='error-message' style={{ visibility: this.state.errorMessIsVisible ? 'visible' : 'hidden' }}>Oops, no data could be fetched. Please enter a valid playlist link.</p>
          </div>}
      </div>
    );
  }
}

export default HeadSearch;

