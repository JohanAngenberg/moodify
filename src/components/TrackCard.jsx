import React from 'react';

export class TrackCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TrackData: {},
            isLoading: true,
            showDetails: false
        }
    }
    componentDidMount() {
        this.setState({
            TrackData: this.props.track,
            isLoading: false

        })
    }
    handleToggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }
    render() {
        const track = this.state.TrackData;
        const wrapperStyles = {
            fontSize: '10px',
            contentHeight: '60px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderBottom: '1px solid gray',
            padding: '5px'
        };
        const tableStyles = {

        }
        const trackNameStyles = {
            margin: '5px',
            fontSize: '15px',
            fontWeight: 'bold',
            display: 'flex',
            flexWrap: 'wrap',
        }
        const artistStyles = {
            margin: '5px',
            fontSize: '12px',
            display: 'flex',
            flexWrap: 'wrap',
        }

        const detailStyles = {
            textAlign: 'left'

        }
        return (
            <div onClick={this.handleToggleDetails.bind(this)} style={wrapperStyles} >
                <img style={{ maxHeight: '100px' }} src={track.image} alt="" />
                <div style={tableStyles}>
                    <div style={trackNameStyles}>{track.songName}</div>
                    <div style={artistStyles}>{track.artist}</div>
                    {this.state.showDetails ?
                        <div style={detailStyles}>
                            <div>Danceability: {Math.round(track.danceability * 100)}%</div>
                            <div>Energy: {Math.round(track.energy * 100)}%</div>
                            <div>Acousticness: {Math.round(track.acousticness * 100)}%</div>
                            <div>Instrumentalness: {Math.round(track.instrumentalness * 100)}%</div>
                            <div>Valence: {Math.round(track.valence * 100)}%</div>
                            <div>Tempo: {Math.round(track.tempo)} bpm</div>
                        </div>
                        : null}
                </div>

            </div >

        )
    }
}