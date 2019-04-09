import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export class TrackCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TrackData: {},
            isLoading: true,
        }
    }
    componentDidMount() {
        this.setState({
            TrackData: this.props.track,
            isLoading: false,

        })
    }

    render() {
        const track = this.state.TrackData;

        //ändrat från container till div 'trackcard'.
        return (
            <div className='trackCard'>
                <Row className='trackCardBackground'>
                    <Col md="3" sm="3" className='trackCardPic'>
                        <img className='trackCardImg' src={track.image} alt="" />

                    </Col>
                    <Col md='7' sm="7">
                        <Row className='trackNameStyles'>{track.songName}</Row>
                        <Row className='artistStyles'>{track.artist}</Row>
                    </Col>
                </Row>
                <Row className='rowCardDetails'>
                    <Col >
                        <img
                            className='info-i-img'
                            src='./Info-i.png'
                            alt='Detailed track info'
                            onClick={this.props.handleShowModalDetails.bind(this, track.id)} />
                    </Col>
                </Row>

            </div>


        )
    }
}