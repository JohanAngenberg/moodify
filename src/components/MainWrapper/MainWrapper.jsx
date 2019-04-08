import React from "react";
import TrackList from "../TrackList/TrackList";
import HeadSearch from "../HeadSearch/HeadSearch";
import WebPlayer from "../WebPlayer/WebPlayer";
import ToolKit from "../ToolKit/ToolKit";
import Modal from '../Modal/Modal';
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
            showModal: false,
            showLanding: true,
        };
    }

    componentDidMount() {
        let parsed = window.location.search.replace("?access_token", "");
        console.log(typeof (parsed));
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
    hideLanding() {
        this.setState({
            showLanding: false
        })
    }

    render() {
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
                                <Col md='12'>
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
                            </Row>
                            <Row>
                                <Col md='12' sm='12' xs='12'>
                                    <TrackList
                                        filterValues={this.state}
                                        playlist={this.state.playlist}
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
