import React, { Component } from 'react'
//import Button from 'react-bootstrap/Button';
import ToggleButton from '../ToggleButton/ToggleButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class quickButtons extends Component {

    setHappyMode() {
        this.props.onPresetClick({
            danceability: 0.5,
            energy: 0.5,
            acousticness: 0.5,
            instrumentalness: 0.5,
            valence: 0.9,
            tempo: 180,
            toggleDance: false,
            toggleEnergy: false,
            toggleAcousticness: false,
            toggleInstrumentalness: false,
            toggleValence: true,
            toggleTempo: false,
        });
    }

    setAngerMode() {
        this.props.onPresetClick({
            danceability: 0.5,
            energy: 0.8,
            acousticness: 0.5,
            instrumentalness: 0.5,
            valence: 0.2,
            tempo: 180,
            toggleDance: false,
            toggleEnergy: true,
            toggleAcousticness: false,
            toggleInstrumentalness: false,
            toggleValence: true,
            toggleTempo: false,
        });
    }

    setPartyMode() {
        this.props.onPresetClick({
            danceability: 0.8,
            energy: 0.8,
            acousticness: 0.5,
            instrumentalness: 0.5,
            valence: 0.5,
            tempo: 180,
            toggleDance: true,
            toggleEnergy: true,
            toggleAcousticness: false,
            toggleInstrumentalness: false,
            toggleValence: false,
            toggleTempo: false,
        });
    }

    setSoftMode() {
        this.props.onPresetClick({
            danceability: 0.5,
            energy: 0.3,
            acousticness: 0.5,
            instrumentalness: 0.8,
            valence: 0.5,
            tempo: 180,
            toggleDance: false,
            toggleEnergy: true,
            toggleAcousticness: false,
            toggleInstrumentalness: true,
            toggleValence: false,
            toggleTempo: false,
        });
    }

    resetPreset() {
        this.props.onPresetClick({
            danceability: 0.5,
            energy: 0.5,
            acousticness: 0.5,
            instrumentalness: 0.5,
            valence: 0.5,
            tempo: 180,
            toggleDance: false,
            toggleEnergy: false,
            toggleAcousticness: false,
            toggleInstrumentalness: false,
            toggleValence: false,
            toggleTempo: false,
        });
    }

    onHappyClick() {
        this.setHappyMode();
    }

    onAngerClick() {
        this.setAngerMode();
    }

    onPartyClick() {
        this.setPartyMode();
    }

    onSoftClick() {
        this.setSoftMode();
    }


    render() {
        return (
            <div>
                <Container className="btn-toolbar, justify-content-around">
                    <Row className>
                        <Col md="auto"><ToggleButton toggleOn={this.setHappyMode.bind(this)} toggleOff={this.resetPreset.bind(this)} variant="success" size="md">Super Happy</ToggleButton></Col>
                        <Col md="auto"><ToggleButton toggleOn={this.setAngerMode.bind(this)} toggleOff={this.resetPreset.bind(this)} variant="success" size="md">Anger Management</ToggleButton></Col>
                        <Col md="auto"><ToggleButton toggleOn={this.setPartyMode.bind(this)} toggleOff={this.resetPreset.bind(this)} variant="success" size="md">Maximum Party</ToggleButton></Col>
                        <Col md="auto"><ToggleButton toggleOn={this.setSoftMode.bind(this)} toggleOff={this.resetPreset.bind(this)} variant="success" size="md">Soft And Cozy</ToggleButton></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}