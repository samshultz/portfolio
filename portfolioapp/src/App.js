import React, { Component } from 'react';
import './App.css';
import About from './portfolio/About'
import Stat from './portfolio/Stat'
import Service from './portfolio/Service';
import Consultation from './portfolio/Consultation';
import Work from './portfolio/Work';
// import Client from './Client'
import Contact from './portfolio/Contact'

class App extends Component {
  
  render() {
    return (
      <div>
        <About />
        <Stat />
        <Service />
        <Consultation />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;
