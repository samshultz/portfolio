import React, { Component } from 'react';
import './App.css';
import About from './About'
import Stat from './Stat'
import Service from './Service';
import Consultation from './Consultation';
import Work from './Work';
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
        <Client />
        <Contact />
      </div>
    );
  }
}

export default App;
