import React, { Component } from 'react';
import './style.css';
import LazyLoad from 'react-lazy-load';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class GifCard extends Component {
  state = { loading: true };

  handleLoading = gif => {
    this.setState({ loading: false });
    // this.props.sortLoading(gif);
  };

  render() {
    const { id, title, rating, username, src, gif } = this.props;
    return (
      <div className="card">
        {}
        <LazyLoad debounce={false} height={180} width={250} offset={0}>
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
