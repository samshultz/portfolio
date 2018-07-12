import React, { Component } from 'react';

import Alert from './Alert';

class ContactInline extends Component {
  state = {}
  inputChanged(event) {
    this.setState({[event.target.name]: event.target.value})
    
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.addContact(this.state)
    event.target.reset()
  }
  render() {
    return (
      <div className="contact-section" id="contact">
        <div className="container">
          <div className="contact-form">
            <h4 className="title-top-w3">Get in touch<span>|</span></h4>
            <h5 className="title-main-w3ls">Contact Me</h5>

            {this.props.success ? <Alert /> : ""}

            <form action="#" method="post" onSubmit={(event)=>this.handleSubmit(event)}>
              <div className="col-md-6 styled-input-w3-agile">
                <input type="text" name="name" placeholder="Enter your name" required onChange={(event)=>this.inputChanged(event)}/>
              </div>
              <div className="col-md-6 styled-input-w3-agile">
                <input type="email" name="email_addr" placeholder="Enter your email" required onChange={(event)=>this.inputChanged(event)}/>
              </div>
              <div className="clearfix"> </div>
              <div className="styled-input-w3-agile">
                <input type="text" name="phone_no" placeholder="Phone Number" required onChange={(event)=>this.inputChanged(event)}/>
              </div>

              <div className="styled-input-w3-agile">
                <input type="text" name="discussion_title" placeholder="Enter the discussion title" required onChange={(event)=>this.inputChanged(event)}/>
              </div>
              <div className="clearfix"> </div>
              <div className="styled-input-w3-agile textarea-grid">
                <textarea name="message" placeholder="Write your message" required defaultValue={""} onChange={(event)=>this.inputChanged(event)}/>
              </div>
              <input type="submit" defaultValue="Send Message" />
            </form>
          </div>
        </div>
        <div className="map-section-agile">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89077.1641770517!2d4.765081261931984!3d45.75793410295141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebaa69916dc3%3A0x9e3bcd04133f4ffa!2sVilla+Florentine!5e0!3m2!1sen!2sin!4v1511929419480" title="contact-address" />
        </div>
      </div>


    );
  }
}

export default ContactInline;
