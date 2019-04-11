import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
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


    render() {
        return (
            <div>
                <Container className="btn-toolbar, justify-content-around">
                    <Row className>
                        <Col md="auto"><Button onClick={this.setHappyMode.bind(this)} variant="success" size="md">Super Happy</Button></Col>
                        <Col md="auto"><Button onClick={this.setAngerMode.bind(this)} variant="success" size="md">Anger Management</Button></Col>
                        <Col md="auto"><Button onClick={this.setPartyMode.bind(this)} variant="success" size="md">Maximum Party</Button></Col>
                        <Col md="auto"><Button onClick={this.setSoftMode.bind(this)} variant="success" size="md">Soft And Cozy</Button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}