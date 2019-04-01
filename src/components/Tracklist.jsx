import React, { Component } from 'react';
import { TrackCard } from './TrackCard';

let dummyPlaylist = require('../dummydata.json');

class TrackList extends Component {
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
            .map((track, i) => (
                <TrackCard track={track}></TrackCard>
            ));

        return (
            <div className="App">
                {playlist}
            </div>
        );
    }
}

export default TrackList;