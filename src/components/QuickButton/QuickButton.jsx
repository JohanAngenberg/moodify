import React, { Component } from 'react'
//import Button from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class quickButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: ''
        }
    }

    setHappyMode() {
        this.setState({ activeButton: 'superHappy' })
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
        this.setState({ activeButton: 'angerManagement' })
        this.props.onPresetClick({
            danceability: 0.5,
            energy: 0.9,
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
        this.setState({ activeButton: 'maximumParty' });
        this.props.onPresetClick({
            danceability: 0.7,
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
        this.setState({ activeButton: 'softCozy' })
        this.props.onPresetClick({
            danceability: 0.5,
            energy: 0.1,
            acousticness: 0.5,
            instrumentalness: 0.9,
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
        this.setState({ activeButton: '' })
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
            <Container className="btn-wrapper">
                <Row className="btn-toolbar">
                    <Col className="btn-col"><Button onClick={this.state.activeButton === 'superHappy' ? this.resetPreset.bind(this) : this.setHappyMode.bind(this)} variant={this.state.activeButton === 'superHappy' ? 'secondary' : 'outline-secondary'} size="md">Super Happy</Button></Col>
                    <Col className="btn-col"><Button onClick={this.state.activeButton === 'angerManagement' ? this.resetPreset.bind(this) : this.setAngerMode.bind(this)} variant={this.state.activeButton === 'angerManagement' ? 'secondary' : 'outline-secondary'} size="md">Anger Management</Button></Col>
                    <Col className="btn-col"><Button onClick={this.state.activeButton === 'maximumParty' ? this.resetPreset.bind(this) : this.setPartyMode.bind(this)} variant={this.state.activeButton === 'maximumParty' ? 'secondary' : 'outline-secondary'} size="md">Maximum Party</Button></Col>
                    <Col className="btn-col"><Button onClick={this.state.activeButton === 'softCozy' ? this.resetPreset.bind(this) : this.setSoftMode.bind(this)} variant={this.state.activeButton === 'softCozy' ? 'secondary' : 'outline-secondary'} size="md">Soft And Cozy</Button></Col>
                </Row>
            </Container>
        )
    }
}