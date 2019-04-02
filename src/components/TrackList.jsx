import React, { Component } from "react";
import { TrackCard } from "./TrackCard";
import {
  getUpperLimit,
  getLowerLimit
} from "../utilities/filterHelpFunctions.js";

let dummyPlaylist = require("../dummydata.json"); //DETTA ÄR DUMMYPLAYLIST

class TrackList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      originalPlaylist: dummyPlaylist,
      playlist: this.props.playlist
      //TA BORT dummyPlaylist OCH ERSÄTT MED [] FÖR ATT HÄMTA BACKEND-DATA
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3001/audio-features/7ot8V1sOKx0RCpOKGbVEoC`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        //this.setState({ originalPlaylist: res })
        //TA BORT // FRÅN OVANSTÅENDE FÖR ATT KOMMA ÅT BACKEND-DATA
      });
  }

  updatePlaylist(e) {
    this.setState({ playlist: e });
  }

  render() {
    console.log(this.props.filterValues);
    let {
      danceability,
      energy,
      acousticness,
      instrumentalness,
      valence,
      tempo
    } = this.props.filterValues;
    const playlist = this.state.originalPlaylist
      .filter(track =>
        danceability === ""
          ? track
          : track.danceability >= getLowerLimit(danceability) &&
            track.danceability <= getUpperLimit(danceability)
      )
      .filter(track =>
        energy === ""
          ? track
          : track.energy >= getLowerLimit(energy) &&
            track.energy <= getUpperLimit(energy)
      )
      .filter(track =>
        acousticness === ""
          ? track
          : track.acousticness >= getLowerLimit(acousticness) &&
            track.acousticness <= getUpperLimit(acousticness)
      )
      .filter(track =>
        instrumentalness === ""
          ? track
          : track.instrumentalness >= getLowerLimit(instrumentalness) &&
            track.instrumentalness <= getUpperLimit(instrumentalness)
      )
      .filter(track =>
        valence === ""
          ? track
          : track.valence >= getLowerLimit(valence) &&
            track.valence <= getUpperLimit(valence)
      )
      .filter(track =>
        tempo === ""
          ? track
          : track.tempo >= getLowerLimit(tempo) &&
            track.tempo <= getUpperLimit(tempo)
      )
      .map((track, i) => <TrackCard key={i} track={track} />);
    console.log(playlist);

    return <div className="App">{playlist}</div>;
  }
}

export default TrackList;
