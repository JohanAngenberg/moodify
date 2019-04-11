import React from 'react';

class ConfirmationModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlistName: ''
        }
    }

    handleInputTextChange(e) {
        let playlistName = e.target.value;
        this.setState({ playlistName: playlistName });
    }
    handleSubmitplaylist() {
        this.props.createPlaylist(this.state.playlistName);
        this.props.toggleModal(false);
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.handleSubmitplaylist()
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
                <div style={modalWrapper} className='confirmationModalWrapper'>
                    <div className='confirmationModalHeader'>
                        <h3 className='confirmationModalHeaderH3'>Create Playlist</h3>
                    </div>
                    <div className='confirmationModalBody'>

                        <h5>Enter playlist name</h5>
                        <input
                            className='confirmationModal-input'
                            type='text'
                            onKeyPress={this.handleKeyPress.bind(this)}
                            onChange={this.handleInputTextChange.bind(this)}
                        />
                    </div>
                    <div className='confirmationModalFooter'>
                        <button className='btnCancel' onClick={this.handleSubmitplaylist.bind(this)}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfirmationModal;

