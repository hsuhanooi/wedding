import React, { Component } from 'react';
import RsvpForm from '../rsvp_form.js';

class Rsvp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
          
            <div className="text-middle come-celebrate">
              <h1>Come celebrate with us</h1>
              <p className="subtitle">Please respond by August 1st, 2017.</p>
            </div>

            <div>
              <RsvpForm />
            </div>

            <div className="questions">
              <h2>FAQ</h2>
              <div className="question-div">
                <p className="question">Are children and babies invited?</p>
                <p className="answer">Family of the bride and groom are invited. We'd like to encourage our friends to party and dance all night with us without having to worry about little eyes and ears, so we politely request for a mostly-adult only event. However, we understand if you are unable to secure a babysitter or if you have an infant, and of course, we'd still love to have you with us. Please RSVP for your baby or kid(s) if they are attending.</p>
              </div>
              <div className="question-div">
                <p className="question">Can I bring a date?</p>
                <p className="answer">Guests invited were addressed on our invitations. Due to limitations in space, we hope you can understand that we're unable to accommodate plus one requests at this time. If you have any questions, please feel free to email, call or text us.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Rsvp;