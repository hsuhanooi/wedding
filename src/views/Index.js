import Modal from 'react-modal';
import React, { Component } from 'react';
import logo from '../logo.svg';

import Img1 from '../images/2017_17_15_45-2.jpg'
import Img2 from '../images/2017_17_16_25.jpg'
import Img3 from '../images/2017_17_17_11.jpg'
import Img4 from '../images/2017_17_17_45-2.jpg'
import Img5 from '../images/2017_17_21_24-2.jpg'
import Img6 from '../images/2017_17_23_17-2.jpg'
import Img7 from '../images/2017_17_27_25-2.jpg'
import Img8 from '../images/2017_17_37_13-2.jpg'
import Img9 from '../images/2017_17_38_27.jpg'
import Img10 from '../images/2017_17_39_50.jpg'
import Img11 from '../images/2017_17_42_26-2.jpg'
import Img12 from '../images/2017_17_42_40-2.jpg'
import Img13 from '../images/2017_17_55_06.jpg'
import Img14 from '../images/2017_18_05_27.jpg'
import Img15 from '../images/2017_18_08_00-2.jpg'
import Img16 from '../images/2017_18_08_32-3.jpg'
import Img17 from '../images/2017_18_08_40.jpg'
import Img18 from '../images/2017_18_08_54-2.jpg'
import Img19 from '../images/2017_20_51_24.jpg'
import Img20 from '../images/2017_20_52_32-2.jpg'
import Img21 from '../images/2017_20_59_01-2.jpg'
import Img22 from '../images/2017_21_01_06.jpg'
import Img23 from '../images/2017_21_02_23.jpg'
import Img24 from '../images/2017_21_03_39.jpg'
import Img25 from '../images/2017_21_17_24.jpg'
import Img26 from '../images/2017_21_22_37.jpg'
import Img27 from '../images/2017_21_25_02.jpg'
import Img28 from '../images/2017_21_29_00-2.jpg'
import Img29 from '../images/2017_21_30_02-3.jpg'
import Img30 from '../images/2017_21_32_52.jpg'
import Img31 from '../images/2017_21_35_16-2.jpg'
import Img32 from '../images/2017_21_51_49-2.jpg'
import Img33 from '../images/2017_22_05_30.jpg'
import Img34 from '../images/2017_22_17_34-2.jpg'
import Img35 from '../images/2017_22_30_05.jpg'

function EngagementPhoto(props) {
    const img = props.img;
    const openModal = props.openModal;

    return (
      <div className="portrait engagement-photo">
      <a onClick={() => openModal(img)}>
        <img src={img} className="orientimg change-cursor" width="200" />
      </a>
      </div>
    )
}

function EngagementPhotos(props) {
    const openModal = props.openModal;
    return (
      <div className="engagement-photos">
        <div className="gallery">
          <EngagementPhoto img={Img5} openModal={openModal} />
          <EngagementPhoto img={Img2} openModal={openModal} />
          <EngagementPhoto img={Img3} openModal={openModal} />
          <EngagementPhoto img={Img4} openModal={openModal} />
          <EngagementPhoto img={Img10} openModal={openModal} />
          <EngagementPhoto img={Img26} openModal={openModal} />
          <EngagementPhoto img={Img28} openModal={openModal} />
          <EngagementPhoto img={Img30} openModal={openModal} />
          <EngagementPhoto img={Img35} openModal={openModal} />
          <EngagementPhoto img={Img32} openModal={openModal} />
        </div>
        <div className="gallery">
          <EngagementPhoto img={Img6} openModal={openModal} />
          <EngagementPhoto img={Img7} openModal={openModal} />
          <EngagementPhoto img={Img8} openModal={openModal} />
          <EngagementPhoto img={Img9} openModal={openModal} />
          <EngagementPhoto img={Img1} openModal={openModal} />
          <EngagementPhoto img={Img11} openModal={openModal} />
          <EngagementPhoto img={Img12} openModal={openModal} />
          <EngagementPhoto img={Img13} openModal={openModal} />
          <EngagementPhoto img={Img14} openModal={openModal} />
          <EngagementPhoto img={Img15} openModal={openModal} />
          <EngagementPhoto img={Img16} openModal={openModal} />
          <EngagementPhoto img={Img17} openModal={openModal} />
          <EngagementPhoto img={Img18} openModal={openModal} />
          <EngagementPhoto img={Img19} openModal={openModal} />
          <EngagementPhoto img={Img20} openModal={openModal} />
          <EngagementPhoto img={Img21} openModal={openModal} />
          <EngagementPhoto img={Img22} openModal={openModal} />
          <EngagementPhoto img={Img23} openModal={openModal} />
          <EngagementPhoto img={Img24} openModal={openModal} />
          <EngagementPhoto img={Img25} openModal={openModal} />
          <EngagementPhoto img={Img27} openModal={openModal} />
          <EngagementPhoto img={Img29} openModal={openModal} />
          <EngagementPhoto img={Img31} openModal={openModal} />
          <EngagementPhoto img={Img33} openModal={openModal} />
          <EngagementPhoto img={Img34} openModal={openModal} />
        </div>
      </div>
    )
}

function OurStory(props) {
  return (
    <div className="our-story">
      <div className="our-story-head">
        <h1>Our Story</h1>
      </div>
      <div className="text-left">
    <div className="our-story-text">
    <p>Hsu Han and Tina first met in college at the University of Washington. The exact details of how they met are lost in time now. In the most likely scenario, they were never formally introduced, but winded up playing in the same “Counter-Strike” session. Their paths crossed occasionally at UW in the virtual world, but it wasn’t until after college that their love grew.</p>
 
<p>Together with their friends, they went on a few trips to the Olympic Peninsula, Portland and Vancouver. They explored their mutual affinities for food and shenanigans and overtime became great friends, although they mostly saw each other in group settings until they found out how close they worked to each other.</p>
 
<p>At the time, Tina was working in downtown Seattle and Hsu Han was working in Lower Queen Anne. If you live in Seattle, you know that commuting from the East side to downtown Seattle and then to Lower Queen Anne is a true test of sanity. Living near each other on the East side, they started carpooling, and with an hour or so spent together on most days, their friendship deepened.</p>
 
<p>One winter day, Hsu Han and Tina went snowmobiling with friends in Leavenworth, and at night they gathered at a restaurant for dinner. Hsu Han, knowing Tina’s navigational handicaps, decided it’d be the perfect opportunity for a romantic stroll through the pretty Bavarian town. He never imagined how engaging and wonderful it could be and soon found himself lost upon the snow. Despite knowing each other for so long, Hsu Han and Tina discovered a spark with each other.</p>
 
<p>A couple months later, Hsu Han devised his move before Valentine’s Day when he made a bet with Tina that she would receive flowers. When the day arrived, the card that came with the flowers read, "You owe me milk tea =)"</p>
 
<p>Fast forward five years later, Hsu Han and Tina are finally entering the next stage of their adventure. On September 22, 2016, Hsu Han proposed to Tina after they watched the sunrise at the summit of Haleakala Crater in Maui. They are very excited to celebrate their wedding with family and friends in Seattle on August 19, 2017!</p>
    </div>
    </div>
    </div>

  )
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      modalImage: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(img) {
    this.setState({modalIsOpen: true, modalImage: img});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <div className="centered container story-container our-story-container">
        </div>
        <div className="container">
          <div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Picture"
            >
              <div className="modal-div centered">
                <img src={this.state.modalImage} className="modal-image" />
              </div>
            </Modal>
            <OurStory />
            <div>
              <EngagementPhotos openModal={this.openModal}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
