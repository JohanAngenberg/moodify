import React, { Component } from "react";

const styleSearchBar = {
  height: "30px",
  width: "400px",
  border: "1px solid black"
};

class HeadSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: [],
      filterInput: ""
    };
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.setState({ filterinput: e.target.value }); this.props.playlistUri(this.state.filterInput);
    }
  }

  render() {
    return (
      <div>
        <br />
        <h1>Moodify</h1>
        <form>
          <input
            ref="inputUri"
            style={styleSearchBar}
            type="text"
            placeholder="Enter playlist URI..."
            value={this.state.input}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <div>{this.state.filterInput}</div>
        </form>
      </div>
    );
  }
}

export default HeadSearch;
