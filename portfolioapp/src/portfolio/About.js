import React, { Component } from 'react';


import AboutInline from './AboutInline';
import { fetchResource } from './../utils/fetch_url';

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
    fetchResource("/api/skills/")
      .then(response => this.setState({ 'skills': response }));
  }
  setAbout() {
    fetchResource("/api/about/")
      .then(response => this.setState({ 'about': response }));
  }
  setEducation() {
    fetchResource("/api/education/")
      .then(response => this.setState({ 'education': response }));
  }
  setExperience() {
    fetchResource("/api/experience/")
      .then(response => this.setState({ 'experience': response }));
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
