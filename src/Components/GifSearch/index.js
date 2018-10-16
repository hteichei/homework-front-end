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
    alert('search!');
    evt.preventDefault();
    let searchStr = this.handleString(this.state.searchParameter);
    console.log('search string', searchStr);
    this.props.getSearch(searchStr);
    this.setState({
      searchParameter: ''
    });
  };

  handleString = str => {
    let newStr = str
      .trim()
      .split(' ')
      .join('+');
    return newStr;
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
