import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowing: false
        }
    }


    render() {
        const modalWrapper = {
            transform: this.props.displayModal ? 'translateY(0vh)' : 'translateY(-100vh)',
        }

        const backDrop = {
            opacity: this.props.displayModal ? '1' : '0',
            transform: this.props.displayModal ? 'translateY(0vh)' : 'translateY(-100vh)',
        }

        return (
            <div>
                <div style={backDrop} className='backDrop' onClick={this.props.toggleModal.bind(this, false)}>&nbsp;</div>
                <div style={modalWrapper} className='modalWrapper'>
                    <div className='modalHeader'>
                        <h3 className='modalHeaderH3'>Help!</h3>
                    </div>
                    <div className='modalBody'>

                        <h4>How I work, you ask?</h4>
                        <p className='infoTextModal'>
                            1. Copy your playlist link from Spotify<br />
                            2. Paste it in the input field behind this message<br />
                            3. Press "Enter" and watch your playlist appear in front of you<br />
                            4. Use our toolkit to filter out the songs you want and listen right away!<br />
                        </p>
                        <h4>But what does it MEAN?</h4>
                        <p className='infoTextModal'>
                            Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.<br /><br />
                            Energy represents a preceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Makes sense right?<br /><br />
                            Acousticness measures whether a track is acoustic. Higher values represents higher confidence of the track being acoustic.<br /><br />
                            Instrumentalness predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context.<br /><br />
                            Valence describes the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).<br /><br />
                            Tempo shows the overall estimated tempo of a track in beats per minute (BPM).<br /><br />
                        </p>
                    </div>
                    <div className='modalFooter'>
                        <button className='btnCancel' onClick={this.props.toggleModal.bind(this, false)}>CLOSE</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;

