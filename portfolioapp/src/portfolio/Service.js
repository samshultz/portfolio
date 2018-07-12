import React, { Component } from 'react';

import ServiceInline from './ServiceInline';
import { fetchResource } from './../utils/fetch_url';

class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'services': []
    }

  }
  
  setServices() {
    // call fetchResource with the correct url and assign a variable to it

    fetchResource("/api/services/")
      .then(response => this.setState({ 'services': response }));
  }

  componentDidMount() {
    this.setServices()
  }
  render() {
    return (
      <ServiceInline services={this.state} />

    );
  }
}

export default Service;
