import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    searchParameter: ''
  };

  handleChange = evt => {
    this.setState({
      searchParameter: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    alert(`Form submitted with ${this.state.searchParameter}`);
    this.setState({
      searchParameter: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label id="search">
            Find A Gif:
            <input
              type="text"
              name="search"
              value={this.state.searchParameter}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default GifSearch;
