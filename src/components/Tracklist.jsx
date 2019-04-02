import React, { Component } from 'react';
import { TrackCard } from './TrackCard';

let dummyPlaylist = require('../dummydata.json');

class TrackList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            originalPlaylist: [],
            filterValues: {
                danceability: '',
                engergy: '',
                acousticness: '',
                instrumentalness: '',
                valence: '',
                tempo: ''
            }
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
        console.log(this.state.originalPlaylist);

        const playlist = this.state.originalPlaylist
            // .filter()
            .map((track, i) => (
                <TrackCard key={i} track={track}></TrackCard>
            ));
        console.log(playlist);


        return (
            <div className="App">
                {playlist}
            </div>
        );
    }
}

export default TrackList;