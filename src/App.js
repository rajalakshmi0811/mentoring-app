import React from 'react';

import Header from './components/Header';
import AboutPage from './pages/AboutPage';

import './App.css'

export default class Example extends React.Component {
  state = {
    collapsed: false
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <AboutPage/>
        </div>
      </div>
    );
  }
}

