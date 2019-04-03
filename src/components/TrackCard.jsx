import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


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
            maxWidth: '85%'
        }
        const artistStyles = {
            margin: '5px',
            fontSize: '12px',
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '85%'
        }

        const barStyle = {
            fontSize: '12px',
            marginTop: '5px'
        }
        return (
            <div style={{ borderBottom: '1px solid gray' }}>

                <div onClick={this.handleToggleDetails.bind(this)} style={wrapperStyles} >
                    <img style={{ maxHeight: '100px' }} src={track.image} alt="" />
                    <div style={tableStyles}>
                        <div style={trackNameStyles}>{track.songName}</div>
                        <div style={artistStyles}>{track.artist}</div>
                    </div>

                </div >
                {this.state.showDetails ?
                    <div>
                        <div style={barStyle}>Danceability<ProgressBar now={Math.round(track.danceability * 100)} label={`${Math.round(track.danceability * 100)}%`} /></div>
                        <div style={barStyle}>Energy <ProgressBar now={Math.round(track.energy * 100)} label={`${Math.round(track.energy * 100)}%`} /></div>
                        <div style={barStyle}>Acousticness <ProgressBar now={Math.round(track.acousticness * 100)} label={`${Math.round(track.acousticness * 100)}%`} /></div>
                        <div style={barStyle}>Instrumentalness <ProgressBar now={Math.round(track.instrumentalness * 100)} label={`${Math.round(track.instrumentalness * 100)}%`} /></div>
                        <div style={barStyle}>Valence <ProgressBar now={Math.round(track.valence * 100)} label={`${Math.round(track.valence * 100)}%`} /></div>
                        <div>Tempo: {Math.round(track.tempo)} bpm</div>
                    </div>
                    : null}
            </div>


        )
    }
}