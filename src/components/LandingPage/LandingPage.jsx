import React, { Component } from "react";
import getPlaylistId from "../../utilities/getPlaylistId.js";

class HeadSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: [],
            filterInput: "",
            playlist: [],
            isVisible: false,
        };
    }


    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.props.playlistUri(this.state.filterInput);
            // console.log(this.state.filterInput);

            fetch(`http://localhost:3001/audio-features/${this.state.filterInput}`)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if (res.length !== 0) {
                        this.setState({ isVisible: false })
                        return res;
                    } else {
                        // console.log('Felhantering!');
                        this.setState({ isVisible: true })
                    }
                })
                // .then(res => console.log(res))
                .then(res => {
                    this.setState({ playlist: res });
                })
                .then(this.props.playlist(this.state.playlist))
                .then(this.props.hideLanding)

        }
    }

    handleInputTextChange(e) {
        let playlistId = getPlaylistId(e.target.value);
        console.log(playlistId);
        this.setState({ filterInput: playlistId });
    }

    handleOnClick(e) {
        e.target.value = '';
        this.setState({ isVisible: false });
    }

    onToggleModal() {
        this.props.toggleModal()
    }

    render() {
        console.log(this.state.isVisible);
        return (
            <div className="landingWrapper">
                <div>
                    <br />
                    <div className='info-button-container'>
                        <div className='info-button' onClick={this.onToggleModal.bind(this)}>
                            <p className='info-button-questionmark'>?</p>
                        </div>
                    </div>
                    {/* <Button className='info-button' onClick={this.onToggleModal.bind(this)}>?</Button> */}
                    <div className='landingContent'>
                        <h1 className='header'>Moodify</h1>
                        <input
                            ref="inputUrl"
                            className='input-field'
                            type="text"
                            placeholder="Enter Spotify playlist link..."
                            value={this.state.input}
                            onChange={this.handleInputTextChange.bind(this)}
                            onKeyDown={this.handleKeyPress.bind(this)}
                            onClick={this.handleOnClick.bind(this)}
                        />
                        {this.state.isVisible &&
                            <p className='error-message'>Oops, no data could be fetched. Please enter a valid playlist link.</p>}
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadSearch;

