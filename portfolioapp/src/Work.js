import React, { Component } from 'react';
import './App.css';

import Modal from './Modal'
import WorkInline from './WorkInline';

class Work extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      'projects': [],
      project: {}
    }
    this.setModalContent = this.setModalContent.bind(this)

  }
  fetchResource(apiUrl) {

    // fetch the data from the apiUrl
    let data = fetch(apiUrl).then(response => response.json()).then(response => response)
    // Return the data
    return data
  }
  setProjects() {
    // call fetchResource with the correct url and assign a variable to it

    fetch('http://127.0.0.1:8000/api/projects/')
      .then(response => response.json())
      .then(response => this.setState({ 'projects': response }))
    
  }

  componentDidMount() {
    this.setProjects()
  }
  setModalContent(event, index) {
    event.preventDefault()
    const project = this.state.projects[index]
    
    this.setState({project: project})


  }
  render() {
    return (
      <div>
      <WorkInline projects={this.state} setModalContent={this.setModalContent} />
      <Modal project={this.state.project}/>
      </div>
    );
  }
}

export default Work;
