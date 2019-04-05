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

        return (
            <Container className='trackCard'>
                <Row className='trackCardBackground'>
                    <Col md="auto" sm="5" className='trackCardPic'>
                        <img className='trackCardImg' src={track.image} alt="" />
                    </Col>
                    <Col md='auto' sm="8">
                        <Row className='trackNameStyles'>{track.songName}</Row>
                        <Row className='artistStyles'>{track.artist}</Row>
                    </Col>
                </Row>
                <Row className='rowCardDetails'>
                    <Col className='Details' onClick={this.handleToggleDetails.bind(this)}>
                        i
                    </Col>
                </Row>

                {this.state.showDetails ?
                    <div>
                        <div className='barStyle'>Danceability<ProgressBar now={Math.round(track.danceability * 100)} label={`${Math.round(track.danceability * 100)}%`} /></div>
                        <div className='barStyle'>Energy <ProgressBar now={Math.round(track.energy * 100)} label={`${Math.round(track.energy * 100)}%`} /></div>
                        <div className='barStyle'>Acousticness <ProgressBar now={Math.round(track.acousticness * 100)} label={`${Math.round(track.acousticness * 100)}%`} /></div>
                        <div className='barStyle'>Instrumentalness <ProgressBar now={Math.round(track.instrumentalness * 100)} label={`${Math.round(track.instrumentalness * 100)}%`} /></div>
                        <div className='barStyle'>Valence <ProgressBar now={Math.round(track.valence * 100)} label={`${Math.round(track.valence * 100)}%`} /></div>
                        <div>Tempo: {Math.round(track.tempo)} bpm</div>
                    </div>
                    : null}
            </Container>


        )
    }
}