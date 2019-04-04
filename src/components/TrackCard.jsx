import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
        /*const wrapperStyles = {
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
*/
        const barStyle = {
            fontSize: '12px',
            marginTop: '5px'
        }
        return (
            <Container style={{ borderRadius: '1px', border: '1px solid gray', margin: '10px', flex: '40%' }}>
                <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <Col md="4">
                        <img style={{ maxHeight: '100px' }} src={track.image} alt="" />
                    </Col>
                    <Col md='6'>
                        <Row>{track.songName}</Row>
                        <Row>{track.artist}</Row>
                    </Col>
                </Row>
                <Row style={{ borderTop: '1px solid gray', padding: '10px', textAlign: 'center' }}>
                    <Col onClick={this.handleToggleDetails.bind(this)}>
                        Show Details
                    </Col>
                </Row>

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
            </Container>


        )
    }
}