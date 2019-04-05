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

        return (
            <Container className='trackCard'>
                <Row className='trackCardBackground'>
                    <Col md="auto" sm="5" className='trackCardPic'>
                        <img className='trackCardImg' src={track.image} alt="" />
                    </Col>
                    <Col md='auto' sm="8">
                        <Row>{track.songName}</Row>
                        <Row>{track.artist}</Row>
                    </Col>
                </Row>
                <Row className='rowCardDetails'>
                    <Col className='Details' onClick={this.handleToggleDetails.bind(this)}>
                        Show Details
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