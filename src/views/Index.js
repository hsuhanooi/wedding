import Modal from 'react-modal';
import React, { Component } from 'react';
import logo from '../logo.svg';

import LogoImg from '../images/2017-01-24_23-54-51_000.jpeg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let modal = <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Picture"
        >

          <div className="modal-caption float-left">
            <p>Picture Caption</p>
          </div>
          <button onClick={this.closeModal} type="button" className="modal-close float-right btn btn-default">
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
          <div className="modal-div">
            <img src={LogoImg} className="modal-image" />
          </div>
        </Modal>

    return (
      <div>
        <div className="centered container story-container our-story-container">
          <p className="story-text">OUR STORY</p>
        </div>
        <div className="container story-middle">
          <div>
            <h2 className="story-middle-header">
              Coming Soon...
            </h2>
          </div>
        </div>
        <div className="centered container story-container best-friends-container">
          <p className="story-text">BEST FRIENDS</p>
        </div>
        <div className="container">
          <div className="image-library">
            <img src={LogoImg} onClick={this.openModal} className="img-library" />
            {modal}
            <img src={LogoImg} className="img-library" />
            <img src={LogoImg} className="img-library" />
            <img src={LogoImg} className="img-library" />
            <img src={LogoImg} className="img-library" />
            <img src={LogoImg} className="img-library" />
            <img src={LogoImg} className="img-library" />
            <img src={LogoImg} className="img-library" />
          </div>
        </div>
        <div className="centered container story-container proposed-container">
          <p className="story-text">HE PROPOSED</p>
        </div>
        <div className="centered container story-container said-yes-container">
          <p className="story-text">SHE SAID MAYBE...</p>
        </div>
      </div>
    );
  }
}

export default App;
