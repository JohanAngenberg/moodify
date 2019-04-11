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
                            1. You can either select an existing playlist from our dropdown menu OR enter a Spotify playlist link of your own choice.<br />
                            2. When you have chosen your playlist two alternatives will appear; Presets and Advanced. You can either choose one of our already done Presets OR use our toolkit to filter out the songs you want.<br />
                        </p>
                        <h4>But what does it MEAN?</h4>
                        <p className='infoTextModal'>
                            Dance describes how suitable a track is for dancing.<br /><br />
                            Energy represents a preceptual measure of intensity and activity.<br /><br />
                            Acoustic measures whether a track is acoustic.<br /><br />
                            Instrumental predicts whether a track contains no vocals.<br /><br />
                            Positivity describes the musical positiveness conveyed by a track.<br /><br />
                            Tempo shows the overall tempo of a track in beats per minute (BPM).<br /><br />
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

