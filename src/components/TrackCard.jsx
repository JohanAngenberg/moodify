import React from 'react';

export class TrackCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TrackData: {},
            isLoading: true
        }
    }
    componentDidMount() {
        this.setState({
            Trackdata: this.props.track,
            isLoading: false
        })
    }

    render() {
        const track = this.state.TrackData;
        const rowWrapperStyles = {
            fontSize: '10px',
            contentHeight: '60px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderBottom: '1px solid gray'
        };

        return (
            <div style={rowWrapperStyles}>
                <img src={track.image} alt="" />
                <div>{track.name}</div>
                <div>{track.artist}</div>
            </div>

        )
    }
}