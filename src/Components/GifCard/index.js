import React, { Component } from 'react';
import './style.css';
import LazyLoad from 'react-lazy-load';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from 'react-awesome-modal';

class GifCard extends Component {
  state = {
    loading: true,
    visible: false
  };

  handleLoading = gif => {
    this.setState({
      loading: false
    });
  };

  handleOpen() {
    this.setState({
      visible: true
    });
  }

  handleClose() {
    console.log('closeClicked');
    this.setState({
      visible: false
    });
  }

  render() {
    const { id, title, rating, username, src, gif } = this.props;
    return (
      <div className="card" onClick={() => this.handleOpen()}>
        <Modal
          visible={this.state.visible}
          effect="fadeInUp"
          onClickAway={() => this.handleClose()}
        >
          <img src={src} />
          <a href="javascript:void(0);" onClick={() => this.handleClose()}>
            Close
          </a>
        </Modal>
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
