import React, { Component } from 'react';
import './App.css';


import ModalInline from './ModalInline';

class Modal extends Component {
    
    render() {
        
        return (
            <ModalInline project={this.props.project}/>

        );
    }
}

export default Modal;
