import React from 'react';
import TrackList from "./TrackList";
import HeadSearch from "./HeadSearch"
import WebPlayer from "./WebPlayer";
import ToolKit from "./ToolKit";


class MainWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playListUri: '',
            danceability: '',
            energy: '',
            acousticness: '',
            instrumentalness: '',
            valence: '',
            tempo: '',
        }
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
    updateEnergy(value) {
        this.setState({
            energy: value
        })
    }

    updateAcousticness(value) {
        this.setState({
            acousticness: value
        })
    }

    updateInstrumentalness(value) {
        this.setState({
            acousticness: value
        })
    }

    updateValence(value) {
        this.setState({
            valence: value
        })
    }

    updateTempo(value) {
        this.setState({
            tempo: value
        })
    }

    render() {
        return (
            <div>
                <div className="header-container">
                    <HeadSearch playlistUri={this.updatePlaylistUri.bind(this)} />
                </div>
                <div className="main-container">
                    <div className="track-container">
                        <TrackList filterValues={this.state} />
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
                            <WebPlayer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainWrapper