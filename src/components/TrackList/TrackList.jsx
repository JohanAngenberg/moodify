import React, { Component } from "react";
import { TrackCard } from "../TrackCard/TrackCard";
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
    /* let {
       danceability,
       energy,
       acousticness,
       instrumentalness,
       valence,
       tempo
     } = this.props.filterValues;*/
    const playlist = !this.props.playlist ? [] : this.props.playlist
      .map((track, id) => (
        <TrackCard key={track.id} track={track}
          handleShowModalDetails={this.handleShowModalDetails.bind(this)}
        ></TrackCard>
      ));

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
