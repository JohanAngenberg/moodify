import React from "react";
import TrackList from "../TrackList/TrackList";
import HeadSearch from "../HeadSearch/HeadSearch";
import WebPlayer from "../WebPlayer/WebPlayer";
import ToolKit from "../ToolKit/ToolKit";
import Modal from '../Modal/Modal';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    getUpperLimit,
    getLowerLimit
} from "../../utilities/filterHelpFunctions.js";

class MainWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistUri: "",
            danceability: "",
            energy: "",
            acousticness: "",
            instrumentalness: "",
            valence: "",
            tempo: "",
            playlist: "",
            showModal: false,
            showLanding: true,
            user: {},
            filteredPlaylist: []
        };
    }

    componentDidMount() {
        let parsed = window.location.search.replace("?access_token", "");
        if (parsed) {
            fetch(`http://moodify.sebastianberglonn.se/user-data/${parsed}`)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        user: json
                    })
                    console.log(this.state.user)
                })
        }
    }



    updateDanceability(value) {
        this.setState({
            danceability: value
        });
    }

    updatePlaylistUri(value) {
        this.setState({
            playlistUri: value
        });
        console.log(this.state.playlistUri);
    }

    updatePlaylist(value) {
        let playlist = value
        this.setState({
            playlist: playlist
        });
        console.log(this.state.playlist);
    }

    updateEnergy(value) {
        this.setState({
            energy: value
        });
    }

    updateAcousticness(value) {
        this.setState({
            acousticness: value
        });
    }

    updateInstrumentalness(value) {
        this.setState({
            acousticness: value
        });
    }

    updateValence(value) {
        this.setState({
            valence: value
        });
    }

    updateTempo(value) {
        this.setState({
            tempo: value
        });
    }


    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }
    hideLanding() {
        this.setState({
            showLanding: false
        })
    }
    createPlaylist(playlist) {
        let accessToken = window.location.search.replace("?access_token", "");
        let playlistName = "Moodify Filtered List!";

        fetch(`http://moodify.sebastianberglonn.se/create-playlist/${this.state.user.id}/${playlistName}/${accessToken}`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(json => {
                let playlistId = json.id;
                console.log(playlistId);

                return fetch(`http://moodify.sebastianberglonn.se/add-tracks/${playlistId}/${playlist}/${accessToken}`, {
                    method: 'POST'
                })
                    .then(res => res.json())
                    .then(json => console.log(json)
                    )

            })
    }

    render() {
        const filteredPlaylist = !this.state.playlist ? [] : this.state.playlist
            .filter(track => this.state.danceability === '' ? track : (track.danceability >= getLowerLimit(this.state.danceability) && track.danceability <= getUpperLimit(this.state.danceability)))
            .filter(track => this.state.energy === '' ? track : (track.energy >= getLowerLimit(this.state.energy) && track.energy <= getUpperLimit(this.state.energy)))
            .filter(track => this.state.acousticness === '' ? track : (track.acousticness >= getLowerLimit(this.state.acousticness) && track.acousticness <= getUpperLimit(this.state.acousticness)))
            .filter(track => this.state.instrumentalness === '' ? track : (track.instrumentalness >= getLowerLimit(this.state.instrumentalness) && track.instrumentalness <= getUpperLimit(this.state.instrumentalness)))
            .filter(track => this.state.valence === '' ? track : (track.valence >= getLowerLimit(this.state.valence) && track.valence <= getUpperLimit(this.state.valence)))
            .filter(track => this.state.tempo === '' ? track : (track.tempo >= getLowerLimit(this.state.tempo) && track.tempo <= getUpperLimit(this.state.tempo)));

        return (
            <div>

                <div className={`header-container ${this.state.showLanding ? 'landing' : null}`}>
                    <HeadSearch
                        playlistUri={this.updatePlaylistUri.bind(this)}
                        playlist={this.updatePlaylist.bind(this)}
                        toggleModal={this.toggleModal.bind(this)}
                        hideLanding={this.hideLanding.bind(this)}
                        showLanding={this.state.showLanding}
                    />
                </div>
                <Modal displayModal={this.state.showModal} toggleModal={this.toggleModal.bind(this)} />
                {!this.state.showLanding ?
                    <Container className='main-container'>
                        <Col md='auto'>
                            <Row>
                                <Col>
                                    <p className='filteredMessage'>You have {filteredPlaylist.length} tracks in your list.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='12'>
                                    <ToolKit
                                        toggleModal={this.toggleModal.bind(this)}
                                        danceability={this.updateDanceability.bind(this)}
                                        energy={this.updateEnergy.bind(this)}
                                        acousticness={this.updateAcousticness.bind(this)}
                                        instrumentalness={this.updateInstrumentalness.bind(this)}
                                        valence={this.updateValence.bind(this)}
                                        tempo={this.updateTempo.bind(this)}
                                        userId={this.state.user.id}
                                        playlist={this.state.playlist}
                                        createPlaylist={this.createPlaylist.bind(this, filteredPlaylist.map(track => track.uri))}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md='12' sm='12' xs='12'>
                                    <TrackList
                                        filterValues={this.state}
                                        playlist={filteredPlaylist}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Container>
                    : null}
                <div className='web-player-container'>{this.state.playlistUri ? <WebPlayer playlistUri={this.state.playlistUri} /> : null}</div>
            </div>

        );
    }
}

export default MainWrapper;
