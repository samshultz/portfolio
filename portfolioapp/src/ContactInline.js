import React, { Component } from 'react';
import './App.css';


class ContactInline extends Component {
    render() {
        return (
            <div className="contact-section" id="contact">
  <div className="container">
    <div className="contact-form">
      <h4 className="title-top-w3">Get in touch<span>|</span></h4>
      <h5 className="title-main-w3ls">Contact Me</h5>
      <form action="#" method="post">
        <div className="col-md-6 styled-input-w3-agile">
          <input type="text" name="Full Name" placeholder="Enter your name" required />
        </div>
        <div className="col-md-6 styled-input-w3-agile">
          <input type="email" name="Email" placeholder="Enter your email" required />
        </div>
        <div className="clearfix"> </div>
        <div className="styled-input-w3-agile">
          <input type="text" name="Subject" placeholder="Enter the discussion title" required />
        </div>
        <div className="styled-input-w3-agile textarea-grid">
          <textarea name="Message" placeholder="Write your message" required defaultValue={""} />
        </div>
        <input type="submit" defaultValue="Send Message" />
      </form>
    </div>
  </div>
  <div className="map-section-agile">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89077.1641770517!2d4.765081261931984!3d45.75793410295141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebaa69916dc3%3A0x9e3bcd04133f4ffa!2sVilla+Florentine!5e0!3m2!1sen!2sin!4v1511929419480" title="contact-address"/>
  </div>
</div>


        );
    }
}

export default ContactInline;
