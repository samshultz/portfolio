import React, { Component } from 'react';
import './App.css';

import AboutInline from './AboutInline';

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'skills': [],
      'about': [],
      'education': [],
      'experience': []
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
  setAbout() {
    fetch('http://127.0.0.1:8000/api/about/')
    .then(response => response.json())
    .then(response => this.setState({ 'about': response }))
  }
  setEducation() {
    fetch('http://127.0.0.1:8000/api/education/')
    .then(response => response.json())
    .then(response => this.setState({ 'education': response }))
  }
  setExperience() {
    fetch('http://127.0.0.1:8000/api/experience/')
    .then(response => response.json())
    .then(response => this.setState({ 'experience': response }))
  }
  componentDidMount() {
    this.setAbout()
    this.setSkills();
    this.setEducation()
    this.setExperience()
  }
  render() {
    
    return (
      <AboutInline info={this.state}/>
    );
  }
}

export default About;
