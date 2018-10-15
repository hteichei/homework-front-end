import React, { Component } from 'react';
import './style.css';
import LazyLoad from 'react-lazy-load';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from 'react-awesome-modal';
// import { xIcon } from '../../Components/Icons/xIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const xIcon = () => (
  <div>
    <FontAwesomeIcon icon="ghost" />;
  </div>
);

class GifCard extends Component {
  state = {
    visible: false,
    loading: true
  };

  handleLoading = gif => {
    //changes css class attribute for fade in transition effect
    this.setState({
      loading: false
    });
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
          height="300"
          width="300"
        >
          <div>
            <div className="modal">
              <img src={item.images.fixed_width.url} alt="GIF Modal" />
              {/* {need to use javascript:void to avoid rerendering page} */}
            </div>
            <a href="javascript:void(0);" onClick={() => this.handleClose()}>
              <xIcon />
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
