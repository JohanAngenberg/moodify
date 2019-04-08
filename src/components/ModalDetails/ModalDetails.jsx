import React, { Component } from "react";

class ModalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { songName } = this.props.track;
        return (
            <div>
                <button
                    onClick={this.props.handleCloseModalDetails.bind(this)}>Close</button>
                <div>
                    THIS IS TEXT IN THE MODAL!
                    {songName}
                   
                </div>
            </div>
        );
    }
}

export default ModalDetails;

