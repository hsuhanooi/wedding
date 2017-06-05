import React, { Component } from 'react';
import Link from 'react-router';

import LogoImg from '../images/2017-01-24_23-54-51_000.jpeg';
import OtherImg from '../images/2017-01-22_14-04-52_870.jpeg'

class When extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <div>
            <h2 className="story-middle-header">
              Ceremony and Reception
            </h2>
          </div>
          <div>
            <p className="story-middle-text">
              SATURDAY, AUGUST 19, 2017
            </p>
            <p className="time">
              TIME: TBD
            </p>
            <div className="location-info centered">
              <div className="ceremony location">
                <h4>
                  Ceremony
                </h4>
                <p className="location">
                  Grieg Garden at the<br/>
                  University of Washington
                </p>
                <p>
                   Seattle, WA 98105
                </p>
                <div>
                  <a target="_blank" href='https://www.google.com/maps/place/Central+Plaza+Garage/@47.6568034,-122.3139718,17z/data=!3m1!4b1!4m5!3m4!1s0x549014f33ae8bc15:0xd16a184637e1d629!8m2!3d47.6567998!4d-122.3117778'>
                    Parking in the Central Plaza Garage
                  </a>
                </div>
                <div>
                  <a target="_blank" href='https://www.google.com/maps/place/Grieg+Garden/@47.6561909,-122.3066153,15z/data=!4m5!3m4!1s0x0:0x5d9e020c09e1ee7c!8m2!3d47.6561909!4d-122.3066153'>
                    Location on Campus
                  </a>
                </div>
              </div>
 
              <div className="reception location">
                <h4>
                  Cocktails & Reception
                </h4>
                <p className="location">
                  The Foundry by Herban Feast (SODO)
                </p>
                <p>
                  4130 1st Avenue South<br/>
                  Seattle, WA 98134
                </p>
                <div>
                  <a target="_blank" href='https://www.google.com/maps/place/The+Foundry+By+Herban+Feast/@47.566129,-122.3336883,15z/data=!4m2!3m1!1s0x0:0x34b71795501d5e9a?sa=X&ved=0ahUKEwj4j-HP0cDSAhUCyGMKHQg7Aw8Q_BIIbTAM'>
                    Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default When;
