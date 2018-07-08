import React, { Component } from 'react';
import './App.css';

import ServiceInline from './ServiceInline';

class Service extends Component {
    constructor(props) {
        super(props)
        this.state = {
          'services': []
        }
        
      }
      fetchResource(apiUrl) {
    
        // fetch the data from the apiUrl
        let data = fetch(apiUrl).then(response => response.json()).then(response => response)
        // Return the data
        return data
      }
      setServices() {
        // call fetchResource with the correct url and assign a variable to it
       
        fetch('http://127.0.0.1:8000/api/services/')
        .then(response => response.json())
        .then(response => this.setState({ 'services': response }))
        // console.log(data)
        // set the state to the data returned
        // this.setState({ 'skills': data })
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
