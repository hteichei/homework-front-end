import React, { Component } from 'react';
import './style.css';
import LazyLoad from 'react-lazy-load';
import Modal from 'react-awesome-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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

  toggleModal = () => {
    //opens modal by setting this.state.visible to true
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };

  handleClose = () => {
    //closes modal.  i do not understand how i got this to work.  peanuts is arbitrary
    this.setState({ peanuts: true });
  };

  render() {
    const { src, item } = this.props;
    return (
      <div className="card" onClick={() => this.toggleModal()}>
        <Modal
          visible={this.state.visible}
          effect="fadeInUp"
          onClickAway={() => this.handleClose()}
          height="350"
          width="350"
        >
          <div>
            <div className="modal">
              <div className="title">
                <p>{this.capitalizeString(item.title)}</p>
              </div>
              <img
                className="modalImg"
                src={item.images.fixed_width.url}
                alt="GIF Modal"
              />
              {/* {need to use javascript:void to avoid rerendering page} */}
            </div>
            <div />
            <a href="javascript:void(0);" onClick={() => this.handleClose()}>
              <FontAwesomeIcon icon={faTimes} className="icon" />
            </a>
          </div>
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
