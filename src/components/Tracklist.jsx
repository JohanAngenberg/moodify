import React, { Component } from 'react';
let dummyPlaylist = require('../dummydata.json');

class Tracklist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            originalPlaylist: []
        };
    }

    componentDidMount() {
        // getPlaylistData()
        // .then(playlist => {
        this.setState({
            // originalPlaylist: playlist
            originalPlaylist: dummyPlaylist
        })
        // });
    }

    render() {
        const playlist = this.state.originalPlaylist
            .map((song, i) => (
                <div key={i}>
                    <p>Artist: {song.artist}: Song name: {song.songName}</p>
                </div>
            ))

        return (
            <div className="App">
                {playlist}
                {/* <TrackCard playlist={playlist}></TrackCard> */}
            </div>
        );
    }
}

export default Tracklist;