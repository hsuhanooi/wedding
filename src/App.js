import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Router, Route, browserHistory, Link} from 'react-router';

import Index from './views/Index';
import When from './views/When';
import Crew from './views/Crew';
import Registry from './views/Registry';
import Rsvp from './views/Rsvp';
import Accomodations from './views/Accomodations'
import Activities from './views/Activities'

function MainLayout({ children }) {
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <div className="logo pull-left">
              <Link to='/' className="logo">
                <span className="logo">TINA & HSU HAN</span>
              </Link>
            </div>
            <ul className="nav navbar-nav pull-right">
              <li role="presentation"><Link to='/'>OUR STORY</Link></li>
              <li role="presentation"><Link className="" to='/crew'>THE CREW</Link></li>
              <li role="presentation"><Link to='/when'>WHEN & WHERE</Link></li>
              <li role="presentation"><Link to='/accommodations'>ACCOMMODATIONS</Link></li>
              <li role="presentation"><Link className="" to='/registry'>REGISTRY</Link></li>
              <li role="presentation"><Link className="" to='/rsvp'>RSVP</Link></li>
              <li role="presentation"><Link className="" to='/activities'>ACTIVITIES & RESTAURANTS</Link></li>
            </ul>
          </div>
        </div>
        {children}
      </div>
    );
}

const Root = ({store}) => (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
        <Route path="/" component={Index} />
        <Route path="/crew" component={Crew} />
        <Route path="/when" component={When} />
        <Route path="/registry" component={Registry} />
        <Route path="/rsvp" component={Rsvp} />
        <Route path="/accommodations" component={Accomodations} />
        <Route path="/activities" component={Activities} />
    </Route>
  </Router>
);

export default Root;
