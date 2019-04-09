import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class ToolKit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
            showToolbar: false
        };
    }

    onToggleToolbar() {
        this.setState({ showToolbar: !this.state.showToolbar })
        console.log(this.state.showToolbar);

    }

    onToggleDance() {
        if (!this.state.toggleDance) {
            this.props.danceability(this.state.danceability)
        } else {
            this.props.danceability("")
        }
        this.setState({ toggleDance: !this.state.toggleDance })
    }
    onToggleEnergy() {
        if (!this.state.toggleEnergy) {
            this.props.energy(this.state.energy)
        } else {
            this.props.energy("")
        }
        this.setState({ toggleEnergy: !this.state.toggleEnergy })
    }
    onToggleAcousticness() {
        if (!this.state.toggleAcousticness) {
            this.props.acousticness(this.state.acousticness)
        } else {
            this.props.acousticness("")
        }
        this.setState({ toggleAcousticness: !this.state.toggleAcousticness });
    }
    onToggleInstrumentalness() {
        if (!this.state.toggleInstrumentalness) {
            this.props.instrumentalness(this.state.instrumentalness)
        } else {
            this.props.instrumentalness("")
        }
        this.setState({ toggleInstrumentalness: !this.state.toggleInstrumentalness });
    }
    onToggleValence() {
        if (!this.state.toggleValence) {
            this.props.valence(this.state.valence)
        } else {
            this.props.valence("")
        }
        this.setState({ toggleValence: !this.state.toggleValence });
    }
    onToggleTempo() {
        if (!this.state.toggleTempo) {
            this.props.tempo(this.state.tempo)
        } else {
            this.props.tempo("")
        }
        this.setState({ toggleTempo: !this.state.toggleTempo });
    }

    onCreatePlaylist() {
        let accessToken = window.location.search.replace("?access_token", "");
        let playlistName = "Moodify Filtered List!";

        fetch(`http://localhost:3001/create-playlist/${this.props.userId}/${playlistName}/${accessToken}`, {
            method: 'POST'
        })
    }

    render() {

        return (
            <div>
                <Container className='toolKit'>
                    <Row className='toolBar'>
                        <Col className='menuButton'>Presets</Col>
                        <Col className={`menuButton ${this.state.showToolbar ? 'active' : null}`} onClick={this.onToggleToolbar.bind(this)}>Advanced <i className="fas fa-sliders-h"></i></Col>
                    </Row>

                    {!this.state.showToolbar ? null :
                        <Row>
                            <Col>
                                <Row className='toolRow'>
                                    <Col>
                                        <Button
                                            onClick={this.onToggleDance.bind(this)} size="sm" variant={this.state.toggleDance ? 'primary' : 'outline-primary'}>
                                            Dance
                                </Button>
                                    </Col>
                                    <Col md="9" xs="7">
                                        <InputRange
                                            disabled={!this.state.toggleDance}
                                            step={1} minValue={0} maxValue={10} value={this.state.danceability * 10}
                                            onChange={value => {
                                                this.setState({ danceability: value / 10 });
                                                this.props.danceability(value / 10)
                                            }} />
                                    </Col>
                                </Row>
                                <Row className='toolRow'>
                                    <Col>
                                        <Button
                                            onClick={this.onToggleEnergy.bind(this)} size="sm" variant={this.state.toggleEnergy ? 'primary' : 'outline-primary'}>
                                            Energy
                                    </Button>
                                    </Col>
                                    <Col md="9" xs="7">
                                        <InputRange disabled={!this.state.toggleEnergy}
                                            step={1} minValue={0} maxValue={10} value={this.state.energy * 10}
                                            onChange={value => {
                                                this.setState({ energy: value / 10 });
                                                this.props.energy(value / 10)
                                            }} />
                                    </Col>
                                </Row>
                                <Row className='toolRow'>
                                    <Col>
                                        <Button
                                            onClick={this.onToggleAcousticness.bind(this)} size="sm" variant={this.state.toggleAcousticness ? 'primary' : 'outline-primary'}>
                                            {/* {this.state.toggleAcousticness ? 'ON' : 'OFF'} */}
                                            Acoustic
                                        </Button>
                                    </Col>
                                    <Col md="9" xs="7">
                                        <InputRange disabled={!this.state.toggleAcousticness}
                                            step={1} minValue={0} maxValue={10} value={this.state.acousticness * 10}
                                            onChange={value => {
                                                this.setState({ acousticness: value / 10 });
                                                this.props.acousticness(value / 10)
                                            }} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row className='toolRow'>
                                    <Col>
                                        <Button
                                            onClick={this.onToggleInstrumentalness.bind(this)} size="sm" variant={this.state.toggleInstrumentalness ? 'primary' : 'outline-primary'}>
                                            {/* {this.state.toggleInstrumentalness ? 'ON' : 'OFF'} */}
                                            Instrumental
                                        </Button>
                                    </Col>
                                    <Col md="9" xs="7">
                                        <InputRange disabled={!this.state.toggleInstrumentalness}
                                            step={1} minValue={0} maxValue={10} value={this.state.instrumentalness * 10}
                                            onChange={value => {
                                                this.setState({ instrumentalness: value / 10 });
                                                this.props.instrumentalness(value / 10)
                                            }} />
                                    </Col>
                                </Row>
                                <Row className='toolRow'>
                                    <Col>
                                        <Button
                                            onClick={this.onToggleValence.bind(this)} size="sm" variant={this.state.toggleValence ? 'primary' : 'outline-primary'}>
                                            {/* {this.state.toggleValence ? 'ON' : 'OFF'} */}
                                            Valence
                                        </Button>
                                    </Col>
                                    <Col md="9" xs="7">
                                        <InputRange disabled={!this.state.toggleValence}
                                            step={1} minValue={0} maxValue={10} value={this.state.valence * 10}
                                            onChange={value => {
                                                this.setState({ valence: value / 10 });
                                                this.props.valence(value / 10)
                                            }} />
                                    </Col>
                                </Row>
                                <Row className='toolRow'>
                                    <Col>
                                        <Button
                                            onClick={this.onToggleTempo.bind(this)} size="sm" variant={this.state.toggleTempo ? 'primary' : 'outline-primary'}>
                                            BPM
                                        </Button>
                                    </Col>
                                    <Col md="9" xs="7">
                                        <InputRange disabled={!this.state.toggleTempo}
                                            step={10} minValue={60} maxValue={300} value={this.state.tempo}
                                            onChange={value => {
                                                this.setState({ tempo: value });
                                                this.props.tempo(value)
                                            }} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    }
                    <Row><Col onClick={this.onCreatePlaylist.bind(this)} className='playButton'>Play on Spotify  <i className="fab fa-spotify"></i></Col></Row>
                </Container>
            </div >
        )
    }
}

export default ToolKit;
