import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Button from 'react-bootstrap/Button';

class ToolKit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            danceability: 0,
            energy: 0,
            acousticness: 0,
            instrumentalness: 0,
            valence: 0,
            tempo: 0,
            toggleDance: false
        };
    }

    onToggleDance() {
        this.setState({ toggleDance: !this.state.toggleDance });
        if (!this.state.toggleDance) {
            this.setState({
                danceability: ""
            })
        } else {
            this.setState({
                danceability: 0
            })
        }
    }

    render() {
        const slideWrapperStyles = {
            height: '100%',
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',

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
        return (
            <div style={slideWrapperStyles}>
                <div style={barWrapperStyles}>
                    <div style={barLabelStyles}>Danceability</div>
                    <div style={{ flexDirection: 'row', width: '100%' }}>
                        <div style={{}}>
                            <Button onClick={this.onToggleDance.bind(this)} size="sm" variant={this.state.toggleDance ? 'info' : 'outline-info'}>{this.state.toggleDance ? 'ON' : 'OFF'}</Button>
                        </div>
                        <div style={{}}>
                            <InputRange disabled={!this.state.toggleDance} step={1} minValue={0} maxValue={10} value={this.state.danceability * 10}
                                onChange={value => {
                                    this.setState({ danceability: value / 10 });
                                    this.props.danceability(value / 10)
                                }} />
                        </div>
                    </div>
                </div>
                <div style={barWrapperStyles}>
                    <div style={barLabelStyles}>Energy</div>
                    <InputRange step={1} minValue={0} maxValue={10} value={this.state.energy * 10}
                        onChange={value => {
                            this.setState({ energy: value / 10 });
                            this.props.energy(value / 10)
                        }} />
                </div>
                <div style={barWrapperStyles}>
                    <div style={barLabelStyles}>Acousticness</div>
                    <InputRange step={1} minValue={0} maxValue={10} value={this.state.acousticness * 10}
                        onChange={value => {
                            this.setState({ acousticness: value / 10 });
                            this.props.acousticness(value / 10)
                        }} />
                </div>
                <div style={barWrapperStyles}>
                    <div style={barLabelStyles}>Instrumentalness</div>
                    <InputRange step={1} minValue={0} maxValue={10} value={this.state.instrumentalness * 10}
                        onChange={value => {
                            this.setState({ instrumentalness: value / 10 });
                            this.props.instrumentalness(value / 10)
                        }} />
                </div>
                <div style={barWrapperStyles}>
                    <div style={barLabelStyles}>Valence</div>
                    <InputRange step={1} minValue={0} maxValue={10} value={this.state.valence * 10}
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
                    <InputRange step={10} minValue={60} maxValue={300} value={this.state.tempo}
                        onChange={value => {
                            this.setState({ tempo: value });
                            this.props.tempo(value)
                        }} />
                </div>
                <Button variant="secondary" size="lg" block>
                    Create Playlist
                </Button>
            </div>
        )
    }
}

export default ToolKit;
