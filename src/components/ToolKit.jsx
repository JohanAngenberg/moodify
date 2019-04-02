import React from 'react';
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class ToolKit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            danceAbility: 0,
            energy: 0,
            acousticness: 0,
            instrumentalness: 0,
            valence: 0,
            tempo: 0,
        }
    }

    render() {
        const slideWrapperStyles = {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }
        return (
            <div style={slideWrapperStyles}>
                <InputRange step={1} minValue={0} maxValue={10} value={this.state.danceAbility * 10} onChange={value => this.setState({ danceAbility: value / 10 })} />
                <InputRange step={1} minValue={0} maxValue={10} value={this.state.energy * 10} onChange={value => this.setState({ energy: value / 10 })} />
                <InputRange step={1} minValue={0} maxValue={10} value={this.state.acousticness * 10} onChange={value => this.setState({ acousticness: value / 10 })} />
                <InputRange step={1} minValue={0} maxValue={10} value={this.state.instrumentalness * 10} onChange={value => this.setState({ instrumentalness: value / 10 })} />
                <InputRange step={1} minValue={0} maxValue={10} value={this.state.valence * 10} onChange={value => this.setState({ valence: value / 10 })} />
                <InputRange step={1} minValue={0} maxValue={10} value={this.state.tempo * 10} onChange={value => this.setState({ tempo: value / 10 })} />
            </div>
        )
    }
}

export default ToolKit;