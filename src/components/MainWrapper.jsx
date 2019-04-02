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

    render() {
        return (
            <div>
                <div className="header-container">
                    <HeadSearch />
                </div>
                <div className="main-container">
                    <div className="track-container">
                        <TrackList filterValues={this.state} />
                    </div>
                    <div className="right-column">
                        <div className="toolkit-container">
                            <ToolKit
                                danceability={this.updateDanceability.bind(this)}
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