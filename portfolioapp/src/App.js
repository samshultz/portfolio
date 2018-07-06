import React, { Component } from 'react';
import './App.css';
import About from './About'
import Stat from './Stat'
import Service from './Service';
import Consultation from './Consultation';
import Work from './Work';
import Modal from './Modal'
import Client from './Client'
import Contact from './Contact'

class App extends Component {
  
  render() {
    return (
      <div>
        <About />
        <Stat />
        <Service />
        <Consultation />
        <Work />
        <Modal />
        <Client />
        <Contact />
      </div>
    );
  }
}

export default App;
