import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="jumbotron header">
        <h1 className="display-4">Gifmania</h1>
        <p className="lead">Find the gifs from your wildest dreams.</p>
        <hr className="my-4" />
      </div>
    );
  }
}

export default Header;
