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
    this.props.getSearch(this.state.searchParameter);
    this.setState({
      searchParameter: ''
    });
  };

  render() {
    const { getTrending } = this.props;
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
        <div className="container">
          <button onClick={() => getTrending()}>Get Trending GIFS</button>
        </div>
      </div>
    );
  }
}

export default GifSearch;
