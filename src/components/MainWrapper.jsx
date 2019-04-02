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
            danceability: 0,
            energy: 0,
            acousticness: 0,
            instrumentalness: 0,
            valence: 0,
            tempo: 0,
            toggleDance: false,
        }
    }

    updateDanceability(value) {
        this.setState({
            danceability: value
        });
        console.log(this.state.danceability);
    }
    render() {
        return (
            <div>
                <div className="header-container">
                    <HeadSearch />
                </div>
                <div className="main-container">
                    <div className="track-container">
                        <TrackList />
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