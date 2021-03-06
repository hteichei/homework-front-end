import React, { Component, Fragment } from 'react';
import './style.css';
import LazyLoad from 'react-lazy-load';
import Modal from 'react-awesome-modal';

class GifCard extends Component {
  state = {
    loading: true,
    visible: false
  };

  handleLoading = gif => {
    //changes css class attribute for fade in transition effect
    this.setState({
      loading: false
    });
  };

  capitalizeString = str => {
    //capitalize GIF titles
    let newStr = str
      .slice(0, 1)
      .toUpperCase()
      .concat(str.slice(1));
    return newStr;
  };

  handleOpen = () => {
    this.setState({
      visible: true
    });
  };

  handleClose = () => {
    this.setState({ visible: false });
  };

  render() {
    const { src, item } = this.props;
    return (
      <Fragment>
        <Modal
          visible={this.state.visible}
          effect="fadeInUp"
          onClickAway={() => this.handleClose()}
          height="400"
          width="350"
        >
          <div>
            <div className="modal">
              <div>
                <p className="title">{this.capitalizeString(item.title)}</p>
                <p className="rating">{`Rating: ${item.rating}`}</p>
              </div>
              <img
                className="modalImg"
                src={item.images.fixed_width.url}
                alt="GIF Modal"
              />
            </div>
            <div />
          </div>
        </Modal>
        <div className="card" onClick={() => this.handleOpen()}>
          <LazyLoad debounce={true} height={180} width={250} offset={0}>
            <img
              src={src}
              alt="GIF"
              className={this.state.loading ? 'loading' : 'loaded'}
              onLoad={this.handleLoading}
            />
          </LazyLoad>
        </div>
      </Fragment>
    );
  }
}

export default GifCard;
