import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Router, Route, browserHistory} from 'react-router';

import Index from './views/Index';
import When from './views/When';

import LogoImg from './images/2017-01-24_23-54-51_000.jpeg';

function MainLayout({ children }) {
    return (
      <div className="App">
        <div className="App-header">
          <div className="logo float-left">
            <span className="logo">TINA AND HSU HAN</span>
          </div>
          <ul className="nav nav-pills float-right">
            <li role="presentation"><a href="#">OUR STORY</a></li>
            <li role="presentation"><a href="#">WHEN & WHERE</a></li>
            <li role="presentation"><a href="#">REGISTRY</a></li>
            <li role="presentation"><a href="#">RSVP</a></li>
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
    </Route>
  </Router>
);

export default Root;
