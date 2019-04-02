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
        }
        const artistStyles = {
            margin: '5px',
            fontSize: '12px',
            display: 'flex',
            flexWrap: 'wrap',
        }

        const detailStyles = {

        }
        const barStyle = {
            borderTop: '1px solid gray'
        }
        return (
            <div style={{ borderBottom: '1px solid gray' }}>

                <div onClick={this.handleToggleDetails.bind(this)} style={wrapperStyles} >
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <img style={{ maxHeight: '100px' }} src={track.image} alt="" />
                    <div style={tableStyles}>
                        <div style={trackNameStyles}>{track.songName}</div>
                        <div style={artistStyles}>{track.artist}</div>
                    </div>

                </div >
                {this.state.showDetails ?
                    <div style={detailStyles}>
                        <div style={barStyle}>Danceability<ProgressBar now={Math.round(track.danceability * 100)} label={`Danceability ${Math.round(track.danceability * 100)}%`} /></div>
                        <div style={barStyle}>Annat <ProgressBar now={Math.round(track.danceability * 100)} label={`${Math.round(track.danceability * 100)}%`} /></div>
                        <div>Tempo: {Math.round(track.tempo)} bpm</div>
                    </div>
                    : null}
            </div>


        )
    }
}