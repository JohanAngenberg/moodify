import React from 'react';
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

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
            toggleDance: false,

        }
    }

    onToggleDance() {
        this.setState({ toggleDance: !this.state.toggleDance });
    }

    render() {
        const slideWrapperStyles = {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',

        }

        return (
            <div style={slideWrapperStyles}>
                <div style={{ display: 'flex' }}>
                    <InputRange step={1} minValue={0} maxValue={10} value={this.state.danceability * 10}
                        onChange={value => {
                            this.setState({ danceability: value / 10 });
                            this.props.danceability(value)
                        }} />
                </div>
                <div>
                    <InputRange step={1} minValue={0} maxValue={10} value={this.state.energy * 10}
                        onChange={value => {
                            this.setState({ energy: value / 10 });
                            this.props.energy(value)
                        }} />
                </div>
                <div>
                    <InputRange step={1} minValue={0} maxValue={10} value={this.state.acousticness * 10}
                        onChange={value => {
                            this.setState({ acousticness: value / 10 });
                            this.props.acousticness(value)
                        }} />
                </div>
                <div>
                    <InputRange step={1} minValue={0} maxValue={10} value={this.state.instrumentalness * 10}
                        onChange={value => {
                            this.setState({ instrumentalness: value / 10 });
                            this.props.instrumentalness(value)
                        }} />
                </div>
                <div>
                    <InputRange step={1} minValue={0} maxValue={10} value={this.state.valence * 10}
                        onChange={value => {
                            this.setState({ valence: value / 10 });
                            this.props.valence(value)
                        }} />
                </div>
                <div>
                    <InputRange step={10} minValue={60} maxValue={300} value={this.state.tempo}
                        onChange={value => {
                            this.setState({ tempo: value });
                            this.props.tempo(value)
                        }} />
                </div>
            </div>
        )
    }
}

export default ToolKit;