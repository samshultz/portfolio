import React, { Component } from 'react';

import Modal from './Modal'
import WorkInline from './WorkInline';
import { fetchResource } from './../utils/fetch_url';


class Work extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      project: {}
    }
    this.setModalContent = this.setModalContent.bind(this)

  }
  
  setProjects() {
    
      fetchResource("/api/projects/")
      .then(response => this.setState({ 'projects': response }));
    
  }

  componentDidMount() {
    this.setProjects()
  }
  setModalContent(event, index) {
    event.preventDefault()
    const project = this.state.projects[index]

    this.setState({ project: project })


  }
  render() {
    return (
      <div>
        <WorkInline projects={this.state} setModalContent={this.setModalContent} />
        <Modal project={this.state.project} />
      </div>
    );
  }
}

export default Work;
