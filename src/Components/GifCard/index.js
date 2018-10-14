import React, { Component } from 'react';
import './style.css';
import LazyLoad from 'react-lazy-load';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class GifCard extends Component {
  state = { loading: true };

  handleLoading = () => {
    this.setState({ loading: false });
  };

  render() {
    const { id, title, rating, username, src } = this.props;
    return (
      <div className="card">
        {}
        <LazyLoad debounce={false} height={250} width={250} offset={0}>
          <img
            src={src}
            alt="gif"
            className={this.state.loading ? 'loading' : 'loaded'}
            onLoad={this.handleLoading}
          />
        </LazyLoad>
      </div>
    );
  }
}

export default GifCard;
