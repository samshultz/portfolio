import React, { Component } from 'react';
import './App.css';

import AboutInline from './AboutInline';

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'skills': []
    }
    
  }
  fetchResource(apiUrl) {

    // fetch the data from the apiUrl
    let data = fetch(apiUrl).then(response => response.json()).then(response => response)
    // Return the data
    return data
  }
  setSkills() {
    // call fetchResource with the correct url and assign a variable to it
   
    fetch('http://127.0.0.1:8000/api/skills/')
    .then(response => response.json())
    .then(response => this.setState({ 'skills': response }))
    // console.log(data)
    // set the state to the data returned
    // this.setState({ 'skills': data })
  }
  componentDidMount() {
    this.setSkills();
  }
  render() {
    
    return (
      <AboutInline skills={this.state}/>
    );
  }
}

export default About;
