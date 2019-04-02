import React, { Component } from "react";

const styleSearchBar = {
  height: "30px",
  width: "400px",
  border: "1px solid black"
};

<<<<<<< HEAD


export class HeadSearch extends Component {
=======
class HeadSearch extends Component {
>>>>>>> e4628833f607cb1410bc670420f6ddb6408aeee3
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
        <br />
        <h1>Moodify</h1>
        <form>
          <input
            style={styleSearchBar}
            type="text"
            placeholder="Enter playlist URI..."
            value={this.state.input}
            onChange={value => this.setState({ input: value })}
          />
          <div>{this.state.filterInput}</div>
        </form>
      </div>
    );
  }
}

export default HeadSearch;
