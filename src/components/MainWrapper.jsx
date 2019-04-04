import React from "react";
import TrackList from "./TrackList";
import HeadSearch from "./HeadSearch";
import WebPlayer from "./WebPlayer";
import ToolKit from "./ToolKit";
import Modal from './Modal';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            showModal: false
        };
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
        this.setState({
            playlist: value
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

    render() {
        return (
            <div>
                <div className="header-container">
                    <HeadSearch
                        playlistUri={this.updatePlaylistUri.bind(this)}
                        playlist={this.updatePlaylist.bind(this)}
                    />
                </div>
                <Modal displayModal={this.state.showModal} toggleModal={this.toggleModal.bind(this)} />

                <Container>
                    <Row>
                        <Col md="8">
                            <ToolKit
                                toggleModal={this.toggleModal.bind(this)}
                                danceability={this.updateDanceability.bind(this)}
                                energy={this.updateEnergy.bind(this)}
                                acousticness={this.updateAcousticness.bind(this)}
                                instrumentalness={this.updateInstrumentalness.bind(this)}
                                valence={this.updateValence.bind(this)}
                                tempo={this.updateTempo.bind(this)}
                            />
                        </Col>
                        {this.state.playlistUri ?
                            <Col>
                                <WebPlayer playlistUri={this.state.playlistUri} />
                            </Col>
                            : null}
                    </Row>
                    <Row>
                        <Col>
                            <TrackList
                                filterValues={this.state}
                                playlist={this.state.playlist}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MainWrapper;
