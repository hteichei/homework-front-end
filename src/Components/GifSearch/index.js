import React, { Component } from 'react';
import './style.css';
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
      <div className="searchForm container">
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <label id="search">Find A GIF:</label>
          </div>
          <div className="container">
            <input
              type="text"
              name="search"
              value={this.state.searchParameter}
              onChange={this.handleChange}
            />
          </div>
          <div className="container">
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div class="container">
          <button>Get Trending GIFS</button>
        </div>
      </div>
    );
  }
}

export default GifSearch;
