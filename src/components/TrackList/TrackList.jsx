import React, { Component } from "react";
import { TrackCard } from "../TrackCard/TrackCard";
import {
  getUpperLimit,
  getLowerLimit
} from "../../utilities/filterHelpFunctions.js";
import ModalDetails from "../ModalDetails/ModalDetails";

// let dummyPlaylist = require("../../dummydata.json"); DETTA ÄR DUMMYPLAYLIST

class TrackList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModalDetails: false,
      selectedTrack: undefined
    };
  }

  handleShowModalDetails(id) {
    this.setState({
      selectedTrack: this.props.playlist.find(obj => obj.id === id)
    });
    this.setState({
      showModalDetails: true,
    });
  }

  handleCloseModalDetails(e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    this.setState({
      showModalDetails: false
    });
  }

  render() {
    // console.log(this.props.filterValues);
    let {
      danceability,
      energy,
      acousticness,
      instrumentalness,
      valence,
      tempo
    } = this.props.filterValues;
    const playlist = !this.props.playlist ? [] : this.props.playlist
      .filter(track => danceability === '' ? track : (track.danceability >= getLowerLimit(danceability) && track.danceability <= getUpperLimit(danceability)))
      .filter(track => energy === '' ? track : (track.energy >= getLowerLimit(energy) && track.energy <= getUpperLimit(energy)))
      .filter(track => acousticness === '' ? track : (track.acousticness >= getLowerLimit(acousticness) && track.acousticness <= getUpperLimit(acousticness)))
      .filter(track => instrumentalness === '' ? track : (track.instrumentalness >= getLowerLimit(instrumentalness) && track.instrumentalness <= getUpperLimit(instrumentalness)))
      .filter(track => valence === '' ? track : (track.valence >= getLowerLimit(valence) && track.valence <= getUpperLimit(valence)))
      .filter(track => tempo === '' ? track : (track.tempo >= getLowerLimit(tempo) && track.tempo <= getUpperLimit(tempo)))
      .map((track, id) => (
        <TrackCard key={track.id} track={track}
          handleShowModalDetails={this.handleShowModalDetails.bind(this)}
        ></TrackCard>
      ));
    // console.log(playlist);

    return (
      <div className="tracks-container">
        {this.state.showModalDetails && (
          <ModalDetails
            track={this.state.selectedTrack}
            handleCloseModalDetails={this.handleCloseModalDetails.bind(this)}
          >
          </ModalDetails>
        )}
        {playlist}
      </div>
    );
  }
}

export default TrackList;
