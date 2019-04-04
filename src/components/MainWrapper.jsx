import React from "react";
import TrackList from "./TrackList";
import HeadSearch from "./HeadSearch";
import WebPlayer from "./WebPlayer";
import ToolKit from "./ToolKit";
<<<<<<< HEAD
import QuickButton from "./QuickButton";
=======
import Modal from './Modal';
>>>>>>> 8acf8a76609b0dc0bc588613ce11090646e9d26e

class MainWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistUri: "",
            danceability: "",
            energy: "",
            acousticness: "",
            instrumentalness: "",
            valence: "",
            tempo: "",
            playlist: "",
            showModal: false
        };
    }

    updateDanceability(value) {
        this.setState({
            danceability: value
        });
    }

    updatePlaylistUri(value) {
        this.setState({
            playlistUri: value
        });
        console.log(this.state.playlistUri);
    }

    updatePlaylist(value) {
        this.setState({
            playlist: value
        });
        console.log(this.state.playlist);
    }

    updateEnergy(value) {
        this.setState({
            energy: value
        });
    }

    updateAcousticness(value) {
        this.setState({
            acousticness: value
        });
    }

    updateInstrumentalness(value) {
        this.setState({
            acousticness: value
        });
    }

    updateValence(value) {
        this.setState({
            valence: value
        });
    }

    updateTempo(value) {
        this.setState({
            tempo: value
        });
    }

<<<<<<< HEAD
  render() {
    return (
      <div>
        <div className="header-container">
          <HeadSearch
            playlistUri={this.updatePlaylistUri.bind(this)}
            playlist={this.updatePlaylist.bind(this)}
          />
        </div>
        <div className="main-container">
          <div className="track-container">
            <TrackList
              filterValues={this.state}
              playlist={this.state.playlist}
            />
          </div>
          <div className="right-column">
            <div className="toolkit-container">
              <QuickButton
                danceability={this.updateDanceability.bind(this)}
                energy={this.updateEnergy.bind(this)}
                acousticness={this.updateAcousticness.bind(this)}
                instrumentalness={this.updateInstrumentalness.bind(this)}
                valence={this.updateValence.bind(this)}
                tempo={this.updateTempo.bind(this)}
              />
              <ToolKit
                danceability={this.updateDanceability.bind(this)}
                energy={this.updateEnergy.bind(this)}
                acousticness={this.updateAcousticness.bind(this)}
                instrumentalness={this.updateInstrumentalness.bind(this)}
                valence={this.updateValence.bind(this)}
                tempo={this.updateTempo.bind(this)}
              />
            </div>
            <div className="player-container">
              <WebPlayer playlistUri={this.state.playlistUri} />
=======
    toggleModal(event) {
        this.setState({
            showModal: event
        });
    }

    render() {
        return (
            <div>
                <div className="header-container">
                    <HeadSearch
                        playlistUri={this.updatePlaylistUri.bind(this)}
                        playlist={this.updatePlaylist.bind(this)}
                    />
                </div>
                <div className="main-container">
                    <div className="track-container">
                        <TrackList
                            filterValues={this.state}
                            playlist={this.state.playlist}
                        />
                    </div>
                    <div className="right-column">
                        <div className="toolkit-container">
                            <ToolKit
                                danceability={this.updateDanceability.bind(this)}
                                energy={this.updateEnergy.bind(this)}
                                acousticness={this.updateAcousticness.bind(this)}
                                instrumentalness={this.updateInstrumentalness.bind(this)}
                                valence={this.updateValence.bind(this)}
                                tempo={this.updateTempo.bind(this)}
                            />
                        </div>
                        <div className="player-container">
                            <WebPlayer playlistUri={this.state.playlistUri} />
                        </div>
                        <div className="modal-container">
                            <button onClick={this.toggleModal.bind(this, true)}>hej</button>
                            <Modal
                                toggleModal={this.toggleModal.bind(this)}
                                displayModal={this.state.showModal}
                            />
                        </div>
                    </div>
                </div>
>>>>>>> 8acf8a76609b0dc0bc588613ce11090646e9d26e
            </div>
        );
    }
}

export default MainWrapper;
