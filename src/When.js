import React, { Component } from 'react';
import logo from './logo.svg';
import './When.css';

import LogoImg from './images/2017-01-24_23-54-51_000.jpeg';

class When extends Component {
  render() {
    return (
      <div className="centered container story-container our-story-container">
        <p className="story-text">OUR STORY</p>
      </div>
      <div className="container story-middle">
        <div>
          <h2 className="story-middle-header">
            We met in Hong Kong Bistro...
          </h2>
        </div>
        <div>
          <p className="story-middle-text">
            Our mutual friends were thinking let's go play soccer when it's really cold
            outside. Hsu Han was sad and thinking about Zelda while Tina was on a 
            trip to Lisbon.
          </p>
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
    );
  }
}

export default When;
