import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

class ModalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { songName, artist, danceability, energy, acousticness, instrumentalness, valence, tempo } = this.props.track;
        return (
            <div
                style={backdropDetails}
                onClick={this.props.handleCloseModalDetails.bind(this)}
            // className='backdropDetails'
            >
                <div
                    // className='modalStyles'
                    style={modalStyles}
                >
                    <img className='close-button' src='./close.png' onClick={this.props.handleCloseModalDetails.bind(this)} alt='Close' />
                    <p className='trackNameStyles-inmodal'>{songName}</p>
                    <p className='artistStyles-inmodal'>{artist}</p>
                    <div className='barStyle'>Dance<ProgressBar now={Math.round(danceability * 100)} label={`${Math.round(danceability * 100)}%`} /></div>
                    <div className='barStyle'>Energy <ProgressBar now={Math.round(energy * 100)} label={`${Math.round(energy * 100)}%`} /></div>
                    <div className='barStyle'>Acoustic <ProgressBar now={Math.round(acousticness * 100)} label={`${Math.round(acousticness * 100)}%`} /></div>
                    <div className='barStyle'>Instrumental <ProgressBar now={Math.round(instrumentalness * 100)} label={`${Math.round(instrumentalness * 100)}%`} /></div>
                    <div className='barStyle'>Positivity <ProgressBar now={Math.round(valence * 100)} label={`${Math.round(valence * 100)}%`} /></div>
                    <div className='barStyle'>Tempo: {Math.round(tempo)} bpm</div>
                </div>
            </div>
        );
    }
}

export default ModalDetails;

const backdropDetails = {
    backgroundColor: 'rgb(255, 255, 255, 0.4)',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '150vh',
    zIndex: '10',

}

const modalStyles = {
    backgroundColor: 'white',
    border: '1px solid #007d2a',
    boxShadow: '1px 1px 5px 1px #007d2a',
    borderRadius: '5px',
    maxWidth: '300px',
    margin: '0 auto',
    position: 'relative',
    top: '15%',
    padding: '10px',
};