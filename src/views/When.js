import React, { Component } from 'react';
import Link from 'react-router';

class When extends Component {
  render() {
    return (
      <div id="when">

        <div className="centered container story-container our-story-container">
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center title">
              <h1>Ceremony and Reception</h1>
              <p>Saturday, August 19, 2017</p>
            </div>
          </div>
          <div className="row">
            <div className="location-info col-md-6 text-center">
              <h4>Ceremony</h4>
              <p className="time">3:00pm</p>
              <br/>
              <p>
                <u>Grieg Garden</u><br/> 
                University of Washington<br/> 
                Seattle, WA 98105 
              </p>
              <a target="_blank" href='https://www.google.com/maps/place/Central+Plaza+Garage/@47.6568034,-122.3139718,17z/data=!3m1!4b1!4m5!3m4!1s0x549014f33ae8bc15:0xd16a184637e1d629!8m2!3d47.6567998!4d-122.3117778'>
                Parking in the Central Plaza Garage
              </a>
              <br/>
              <a target="_blank" href='https://www.google.com/maps/place/Grieg+Garden/@47.6561909,-122.3066153,15z/data=!4m5!3m4!1s0x0:0x5d9e020c09e1ee7c!8m2!3d47.6561909!4d-122.3066153'>
                Location on Campus
              </a>
              <br/><br/>
              <p className="ceremony-tip">The ceremony will take place on grass. We suggest wearing your cutest flats to the ceremony and saving your fashionable heels for the reception and dancing afterwards.</p>
            </div>
            <div className="reception location col-md-6 text-center">
              <h4>Cocktails & Reception</h4>
              <p className="time">5:00pm</p>
              <br/>
              <p >
                <u>The Foundry by Herban Feast (SODO)</u><br/>
                4130 1st Avenue South<br/> Seattle, WA 98134
              </p>
              <a target="_blank" href='https://www.google.com/maps/place/The+Foundry+By+Herban+Feast/@47.566129,-122.3336883,15z/data=!4m2!3m1!1s0x0:0x34b71795501d5e9a?sa=X&ved=0ahUKEwj4j-HP0cDSAhUCyGMKHQg7Aw8Q_BIIbTAM'>
                Map
              </a>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default When;
