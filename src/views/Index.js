import Modal from 'react-modal';
import React, { Component } from 'react';
import logo from '../logo.svg';

function OurStory(props) {
  return (
    <div className="our-story">
      <div className="row">
        <div className="col-md-offset-3 col-md-6">
          <div className="our-story-head text-center">
            <h1>Our Story</h1>
          </div>
          <div className="our-story-text text-left">
            <p>Hsu Han and Tina first met in college at the University of Washington. The exact details of how they met are lost in time now. In the most likely scenario, they were never formally introduced, but winded up playing in the same “Counter-Strike” session. Their paths crossed occasionally at UW in the virtual world, but it wasn’t until after college that their love grew.</p>
            <p>Together with their friends, they went on a few trips to the Olympic Peninsula, Portland and Vancouver. They explored their mutual affinities for food and shenanigans and overtime became great friends, although they mostly saw each other in group settings until they found out how close they worked to each other.</p>
            <p>At the time, Tina was working in downtown Seattle and Hsu Han was working in Lower Queen Anne. If you live in Seattle, you know that commuting from the East side to downtown Seattle and then to Lower Queen Anne is a true test of sanity. Living near each other on the East side, they started carpooling, and with an hour or so spent together on most days, their friendship deepened.</p>
            <p>One winter day, Hsu Han and Tina went snowmobiling with friends in Leavenworth, and at night they gathered at a restaurant for dinner. Hsu Han, knowing Tina’s navigational handicaps, decided it’d be the perfect opportunity for a romantic stroll through the pretty Bavarian town. He never imagined how engaging and wonderful it could be and soon found himself lost upon the snow. Despite knowing each other for so long, Hsu Han and Tina discovered a spark with each other.</p>
            <p>A couple months later, Hsu Han devised his move before Valentine’s Day when he made a bet with Tina that she would receive flowers. When the day arrived, the card that came with the flowers read, "You owe me milk tea =)"</p>
            <p>Fast forward five years later, Hsu Han and Tina are finally entering the next stage of their adventure. On September 22, 2016, Hsu Han proposed to Tina after they watched the sunrise at the summit of Haleakala Crater in Maui. They are very excited to celebrate their wedding with family and friends in Seattle on August 19, 2017!</p>
          </div>
        </div>
      </div>
    </div>

  )
}

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
    // let modal = <Modal
    //       isOpen={this.state.modalIsOpen}
    //       onAfterOpen={this.afterOpenModal}
    //       onRequestClose={this.closeModal}
    //       contentLabel="Picture"
    //     >

    //       <div className="modal-caption float-left">
    //         <p>Picture Caption</p>
    //       </div>
    //       <button onClick={this.closeModal} type="button" className="modal-close float-right btn btn-default">
    //         <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
    //       </button>
    //       <div className="modal-div">
    //         <img src={LogoImg} className="modal-image" />
    //       </div>
    //     </Modal>

    return (
      <div>
        <div className="centered container story-container our-story-container">
        </div>
        <div className="container">
          <div>
          <OurStory />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
