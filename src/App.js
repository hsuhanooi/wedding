import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Router, Route, browserHistory, Link} from 'react-router';

import Index from './views/Index';
import When from './views/When';
import Registry from './views/Registry';
import Rsvp from './views/Rsvp';

import LogoImg from './images/2017-01-24_23-54-51_000.jpeg';

function MainLayout({ children }) {
    return (
      <div className="App">
        <div className="App-header">
          <div className="logo float-left">
            <Link to='/' className="logo">
              <span className="logo">TINA AND HSU HAN</span>
            </Link>
          </div>
          <ul className="nav nav-pills float-right">
            <li role="presentation"><Link to='/'>OUR STORY</Link></li>
            <li role="presentation"><Link to='/when'>WHEN & WHERE</Link></li>
            <li role="presentation"><Link to='/registry'>REGISTRY</Link></li>
            <li role="presentation"><Link to='/rsvp'>RSVP</Link></li>
          </ul>
        </div>
        {children}
      </div>
    );
}

const Root = ({store}) => (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
        <Route path="/" component={Index} />
        <Route path="/when" component={When} />
        <Route path="/registry" component={Registry} />
        <Route path="/rsvp" component={Rsvp} />
    </Route>
  </Router>
);

export default Root;
