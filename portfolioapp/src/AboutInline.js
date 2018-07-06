import React, { Component } from 'react';
import './App.css';

class AboutInline extends Component {
    render() {
        return (
            <div className="about-section" id="about">
                <div className="container">
                    <h4 className="title-top-w3">Something<span>|</span></h4>
                    <h5 className="title-main-w3ls">About Me</h5>
                    <div id="horizontalTab">
                        <ul className="resp-tabs-list">
                            <li>About Me</li>
                            <li>Skills</li>
                            <li>Education</li>
                            <li>Experience</li>
                        </ul>
                        <div className="resp-tabs-container">
                            <div className="tab1">
                                <div className="col-md-10 about-left-w3layouts">
                                    <ul>
                                        <li><span>Date of birth</span>: 31st March 1984</li>
                                        <li><span>Language</span>: English, Dutch, French</li>
                                        <li><span>Expert in</span>: Web development</li>
                                        <li><span>Phone</span>: +011 222 3333</li>
                                        <li><span>Email</span>: <a href="mailto:example@mail.com">mail@example.com</a></li>
                                        <li><span>Address</span>: 25 Montée Saint-Barthélémy, France</li>
                                        <li><span>Freelance</span>: Available</li>
                                    </ul>
                                    <div className="pos-grid-agileinfo">
                                        <img src={require('./images/about.jpg')} className="img-responsive" alt=
                                            '' />
                                        <h5>About Me</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="tab2">
                                <div className="col-md-10 about-left-w3layouts">
                                    <h6>Web Design<span> 100% </span></h6>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped active" style={{ width: '100%' }}>
                                        </div>
                                    </div>
                                    <div className="mid-bar-agileits-w3layouts">
                                        <h6>Photoshop<span> 90% </span></h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped active" style={{ width: '90%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <h6>Illustrator<span>80% </span></h6>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped active" style={{ width: '80%' }}>
                                        </div>
                                    </div>
                                    <div className="mid-bar-agileits-w3layouts">
                                        <h6>Wordpress<span>70% </span></h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped active" style={{ width: '70%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <h6>Jquery<span>75% </span></h6>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped active" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                    <div className="pos-grid-agileinfo">
                                        <span className="fa fa-line-chart" aria-hidden="true" />
                                        <h5>Skills</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="tab3">
                                <div className="col-md-10 about-left-w3layouts">
                                    <div className="about-info-w3-agileits">
                                        <h6>Master Of Visual Design<span>2010-2012</span></h6>
                                        <div className="clearfix"> </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio consequat, tristique elit sed, molestie nulla.
                Mauris et quam leo.</p>
                                    </div>
                                    <div className="about-info-w3-agileits mid-bar-agileits-w3layouts">
                                        <h6>Master Of Designing<span>2010-2008</span></h6>
                                        <div className="clearfix"> </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio consequat, tristique elit sed.</p>
                                    </div>
                                    <div className="about-info-w3-agileits">
                                        <h6>Graduate in Designing<span>2008-2006</span></h6>
                                        <div className="clearfix"> </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="pos-grid-agileinfo">
                                        <span className="fa fa-graduation-cap" aria-hidden="true" />
                                        <h5>Education</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="tab4">
                                <div className="col-md-10 about-left-w3layouts">
                                    <div className="about-info-w3-agileits">
                                        <h6>Graphic Designer, Web Designer<span>2017-</span></h6>
                                        <div className="clearfix"> </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="about-info-w3-agileits mid-bar-agileits-w3layouts">
                                        <h6>Web Development<span>2017-2015</span></h6>
                                        <div className="clearfix"> </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio consequat, tristique elit sed, molestie nulla.
                Mauris et quam leo.</p>
                                    </div>
                                    <div className="about-info-w3-agileits">
                                        <h6>Front-End Developer<span>2015-2012</span></h6>
                                        <div className="clearfix"> </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio consequat, tristique elit sed.</p>
                                    </div>
                                    <div className="pos-grid-agileinfo">
                                        <span className="fa fa-shield" aria-hidden="true" />
                                        <h5>Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AboutInline;
