import React, { Component } from "react";

const searchBar = {
  height: "30px",
  width: "400px",
  border: "1px solid black"
};

export class HeadSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: [],
      filterInput: ""
    };
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="header-container">
        <h1>Spotify</h1>
=======
      <div>
        <h1>Moodify</h1>
>>>>>>> 27807d190d8a3c31f6d96f78859fc9e16323d8d4
        <form>
          <input
            style={searchBar}
            type="text"
            placeholder="Enter playlist URI..."
            value={this.state.input}
            onChange={this.handleTextInput}
          />
          <div>{this.state.filterInput}</div>
        </form>
      </div>
    );
  }
}

export default HeadSearch;
