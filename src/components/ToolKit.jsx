import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Button from 'react-bootstrap/Button';

class ToolKit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            danceability: "",
            energy: "",
            acousticness: "",
            instrumentalness: "",
            valence: "",
            tempo: "",
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

    render() {
        const slideWrapperStyles = {
            height: '100%',
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',

        }
        const barWrapperStyles = {
            borderBottom: '1px solid gray',
            paddingBottom: '25px',
            textAlign: 'center',
            width: '100%',
        }

        const barLabelStyles = {
            marginBottom: '20px',
            fontSize: '12px',
        }

        const toolsWrappertStyles = {
            display: 'flex'
        }
        const buttonWrapperStyles = {
            height: '100%',
            display: 'flex',
            width: '25%',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }
        const buttonStyles = {
            height: '80px'
        }
        return (
            <div>
                <Button variant='info' onClick={this.onToggleToolbar.bind(this)}>PLACEHOLDER Advanced</Button>
                {!this.state.showToolbar ? null : <div style={toolsWrappertStyles}>
                    <div style={buttonWrapperStyles}>
                        <div style={{ height: '80px', marginTop: '30px' }}>
                            <Button onClick={this.onToggleDance.bind(this)} size="sm" variant={this.state.toggleDance ? 'info' : 'outline-info'}>
                                {this.state.toggleDance ? 'ON' : 'OFF'}</Button>
                        </div>
                        <div style={buttonStyles}>
                            <Button onClick={this.onToggleEnergy.bind(this)} size="sm" variant={this.state.toggleEnergy ? 'info' : 'outline-info'}>
                                {this.state.toggleEnergy ? 'ON' : 'OFF'}</Button>
                        </div>
                        <div style={buttonStyles}>
                            <Button onClick={this.onToggleAcousticness.bind(this)} size="sm" variant={this.state.toggleAcousticness ? 'info' : 'outline-info'}>
                                {this.state.toggleAcousticness ? 'ON' : 'OFF'}</Button>
                        </div>
                        <div style={buttonStyles}>
                            <Button onClick={this.onToggleInstrumentalness.bind(this)} size="sm" variant={this.state.toggleInstrumentalness ? 'info' : 'outline-info'}>
                                {this.state.toggleInstrumentalness ? 'ON' : 'OFF'}</Button>
                        </div>
                        <div style={buttonStyles}>
                            <Button onClick={this.onToggleValence.bind(this)} size="sm" variant={this.state.toggleValence ? 'info' : 'outline-info'}>
                                {this.state.toggleValence ? 'ON' : 'OFF'}</Button>
                        </div>
                        <div style={buttonStyles}>
                            <Button onClick={this.onToggleTempo.bind(this)} size="sm" variant={this.state.toggleTempo ? 'info' : 'outline-info'}>
                                {this.state.toggleTempo ? 'ON' : 'OFF'}</Button>
                        </div>
                    </div>

                    <div style={slideWrapperStyles}>
                        <div style={barWrapperStyles}>
                            <div style={barLabelStyles}>Danceability</div>
                            <div style={{ flexDirection: 'row', width: '100%' }}>

                                <div>
                                    <InputRange disabled={!this.state.toggleDance}
                                        step={1} minValue={0} maxValue={10} value={this.state.danceability * 10}
                                        onChange={value => {
                                            this.setState({ danceability: value / 10 });
                                            this.props.danceability(value / 10)
                                        }} />
                                </div>
                            </div>
                        </div>
                        <div style={barWrapperStyles}>
                            <div style={barLabelStyles}>Energy</div>
                            <InputRange disabled={!this.state.toggleEnergy}
                                step={1} minValue={0} maxValue={10} value={this.state.energy * 10}
                                onChange={value => {
                                    this.setState({ energy: value / 10 });
                                    this.props.energy(value / 10)
                                }} />
                        </div>
                        <div style={barWrapperStyles}>
                            <div style={barLabelStyles}>Acousticness</div>
                            <InputRange disabled={!this.state.toggleAcousticness}
                                step={1} minValue={0} maxValue={10} value={this.state.acousticness * 10}
                                onChange={value => {
                                    this.setState({ acousticness: value / 10 });
                                    this.props.acousticness(value / 10)
                                }} />
                        </div>
                        <div style={barWrapperStyles}>
                            <div style={barLabelStyles}>Instrumentalness</div>
                            <InputRange disabled={!this.state.toggleInstrumentalness}
                                step={1} minValue={0} maxValue={10} value={this.state.instrumentalness * 10}
                                onChange={value => {
                                    this.setState({ instrumentalness: value / 10 });
                                    this.props.instrumentalness(value / 10)
                                }} />
                        </div>
                        <div style={barWrapperStyles}>
                            <div style={barLabelStyles}>Valence</div>
                            <InputRange disabled={!this.state.toggleValence}
                                step={1} minValue={0} maxValue={10} value={this.state.valence * 10}
                                onChange={value => {
                                    this.setState({ valence: value / 10 });
                                    this.props.valence(value / 10)
                                }} />
                        </div>
                        <div style={{
                            paddingBottom: '25px',
                            textAlign: 'center'
                        }}>
                            <div style={barLabelStyles}>Tempo</div>
                            <InputRange disabled={!this.state.toggleTempo}
                                step={10} minValue={60} maxValue={300} value={this.state.tempo}
                                onChange={value => {
                                    this.setState({ tempo: value });
                                    this.props.tempo(value)
                                }} />
                        </div>
                    </div>
                </div>
                }
                <Button variant='info' block>Create Playlist</Button>
            </div>
        )
    }
}

export default ToolKit;
