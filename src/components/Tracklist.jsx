import React, { Component } from 'react';
import { TrackCard } from './TrackCard';



let dummyPlaylist = require('../dummydata.json');     //DETTA ÄR DUMMYPLAYLIST


class TrackList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            originalPlaylist: dummyPlaylist
            //TA BORT dummyPlaylist OCH ERSÄTT MED [] FÖR ATT HÄMTA BACKEND-DATA
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/audio-features/5cc2hF6vD6wDqq3sksQFCK')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                //this.setState({ originalPlaylist: res })
                //TA BORT // FRÅN OVANSTÅENDE FÖR ATT KOMMA ÅT BACKEND-DATA
            })

    }



    render() {
        const playlist = this.state.originalPlaylist
            .map((track, i) => (
                <TrackCard key={i} track={track}></TrackCard>
            ));

        return (
            <div className="App">
                {playlist}
            </div>
        );
    }
}

export default TrackList;