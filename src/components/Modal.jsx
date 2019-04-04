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
            background: 'white',
            border: '1px solid #d0cccc',
            boxShadow: '0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17)',
            margin: '0px auto 0',
            transition: 'all .8s',
            width: '60%'
        }

        const modalHeader = {
            background: '#263238',
            height: '40px',
            lineHeight: '40px',
            padding: '5px 20px',
            textAlign: 'right'
        }

        const modalHeaderh3 = {
            color: 'white',
            float: 'left',
            margin: '0',
            padding: '0'
        }

        const modalBody = {
            padding: '10px 15px',
            textAlign: 'center'
        }

        const modalFooter = {
            background: '#263238',
            height: '35px',
            padding: '15px'
        }

        const closeModalBtn = {
            color: 'white',
            cursor: 'pointer',
            float: 'right',
            fontSize: '30px',
            margin: '0'
        }

        const btnCancel = {
            background: 'coral',
            backgroundColor: '#b71c1c',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            outline: 'none',
            padding: '10px',
            float: 'left',
            width: '100%'
        }

        const backDrop = {
            backgroundColor: 'rgba(48, 49, 48, 0.42)',
            height: '100vh',
            position: 'fixed',
            transition: 'all 1.3s',
            width: '100vw',
            top: 0,
            left: 0,
            zIndex: 1000,
            transform: this.props.displayModal ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: this.props.displayModal ? '1' : '0'
        }

        const infoTextModal = {
            fontSize: '14px'
        }

        return (
            <div style={backDrop}>
                <div
                    style={
                        modalWrapper
                    }>
                    <div style={modalHeader}>
                        <h3 style={modalHeaderh3}>Help!</h3>
                        <span style={closeModalBtn} onClick={this.props.toggleModal.bind(this, false)}>×</span>
                    </div>
                    <div style={modalBody}>

                        <h4>How I work, you ask?</h4>
                        <p style={infoTextModal}>
                            1. Copy your playlist link from Spotify<br />
                            2. Paste it in the input field behind this message<br />
                            3. Press "Enter" and watch your playlist appear in front of you<br />
                            4. Use our toolkit to filter out the songs you want and listen right away!<br />
                        </p>
                        <h4>But what does it MEAN?</h4>
                        <p style={infoTextModal}>
                            Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.<br /><br />
                            Energy represents a preceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Makes sense right?<br /><br />
                            Acousticness measures whether a track is acoustic. Higher values represents higher confidence of the track being acoustic.<br /><br />
                            Instrumentalness predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context.<br /><br />
                            Valence describes the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).<br /><br />
                            Tempo shows the overall estimated tempo of a track in beats per minute (BPM).<br /><br />
                        </p>
                    </div>
                </div>

                <div style={modalFooter}>
                    <button style={btnCancel} onClick={this.props.toggleModal.bind(this, false)}>CLOSE</button>
                </div>
            </div>

        )
    }
}

export default Modal;

