import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
let dummyPlaylist = require("../dummydata.json");

export default class quickButtons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            originalPlaylist: dummyPlaylist,
        }
    }

    setHappyMode() {
        this.props.danceability(0.7)
        this.props.energy("")
        this.props.acousticness("")
        this.props.instrumentalness("")
        this.props.valence("")
        this.props.tempo("")
    }

    setSadMode() {
        this.props.danceability("")
        this.props.energy("")
        this.props.acousticness("")
        this.props.instrumentalness("")
        this.props.valence(0.2)
        this.props.tempo("")
    }

    setPartyMode() {
        this.props.danceability("")
        this.props.energy(0.8)
        this.props.acousticness("")
        this.props.instrumentalness("")
        this.props.valence("")
        this.props.tempo("")
    }

    setStudyMode() {
        this.props.danceability("")
        this.props.energy("")
        this.props.acousticness("")
        this.props.instrumentalness(0.3)
        this.props.valence("")
        this.props.tempo("")
    }


    render() {
        return (
            <div>
                <div className="btn-toolbar">
                    <Button onClick={this.setHappyMode.bind(this)} variant="success" size="sm">Happy Songs</Button>
                    <Button onClick={this.setSadMode.bind(this)} variant="success" size="sm">Sad Songs</Button>
                    <Button onClick={this.setPartyMode.bind(this)} variant="success" size="sm">Maximum Party</Button>
                    <Button onClick={this.setStudyMode.bind(this)} variant="success" size="sm">Study Songs</Button>
                </div>
            </div>
        )
    }
}