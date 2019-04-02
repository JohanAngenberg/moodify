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
      <div>
        <h1>Moodify</h1>
        <form>
          <input
            style={searchBar}
            type="text"
            placeholder="Enter playlist URI..."
            value={this.state.input}
            onChange={value => this.props.playlistUri({ input: value })}
          />
          <div>{this.state.filterInput}</div>
        </form>
      </div>
    );
  }
}

export default HeadSearch;
