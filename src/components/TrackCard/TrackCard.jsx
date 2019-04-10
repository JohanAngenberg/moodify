import React from 'react';
/* import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' */


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

        return (
            <div className='trackCard'>
                <div>
                    <img className='trackCardImg' src={track.image} alt="" />
                </div>
                <div>
                    <p className='trackNameStyles'>{track.songName}</p>
                    <p className='artistStyles'>{track.artist}</p>
                </div>
                <div>
                    <img
                        className='info-i-img'
                        src='./Info-i.png'
                        alt='Detailed track info'
                        onClick={this.props.handleShowModalDetails.bind(this, track.id)} />
                </div>
            </div>
        )
    }
}