import React, { Component } from 'react';
import './App.css';
// import 'whatwg-fetch'
class AboutInline extends Component {

    
    render() {
        const {skills, about, education, experience} = this.props.info
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
                                        {about.map((data, index)=> 
                                        <div key={index}>
                                        <li><span>Language</span>: {data.language}</li>
                                        <li><span>Expert in</span>: {data.expert_in}</li>
                                        <li><span>Phone</span>: {data.phone_no}</li>
                                        <li><span>Email</span>: <a href={`mailto:${data.email}`}>{data.email}</a></li>
                                        <li><span>Address</span>: {data.address}</li>
                                        <li><span>Freelance</span>: {data.freelance ? "Available" : "Not Available"}</li>
                                        </div>
                                    )}
                                    </ul>
                                    <div className="pos-grid-agileinfo">
                                    {about.map((data, index)=>
                                        <img src={data.img} className="img-responsive" alt=
                                            '' key={index} />)}
                                        <h5>About Me</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="tab2">
                                <div className="col-md-10 about-left-w3layouts">
                                {skills.map((skill, index)=>
                                    index%2 === 0 ? 
                                        <div key={index}>
                                    <h6>{skill.name}<span> {skill.expertise + "%"} </span></h6>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped active" style={{ width: skill.expertise + "%" }}>
                                        </div>
                                    </div>
                                </div> : 
                                <div className="mid-bar-agileits-w3layouts" key={index}>
                                <h6>{skill.name}<span> {skill.expertise + "%"} </span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped active" style={{ width: skill.expertise + "%" }}>
                                    </div>
                                </div>
                            </div>
                            
                                
                                )}
                                    
                                    <div className="pos-grid-agileinfo">
                                        <span className="fa fa-line-chart" aria-hidden="true" />
                                        <h5>Skills</h5>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab3">
                                <div className="col-md-10 about-left-w3layouts">
                                {education.map((item,index)=>
                                index%2 === 0 ?
                                    <div className="about-info-w3-agileits" key={index}>
                                        <h6>{item.title}<span>{new Date(item.date_started).getFullYear()}-{new Date(item.date_ended).getFullYear()}</span></h6>
                                        <div className="clearfix"> </div>
                                        <p>{item.description}</p>
                                    </div>
                                    :
                                    <div className="about-info-w3-agileits mid-bar-agileits-w3layouts" key={index}>
                                        <h6>{item.title}<span>{new Date(item.date_started).getFullYear()}-{new Date(item.date_ended).getFullYear()}</span></h6>
                                        <div className="clearfix"> </div>
                                        <p>{item.description}</p>
                                    </div>
                                    )}
                                    
                                    
                                    <div className="pos-grid-agileinfo">
                                        <span className="fa fa-graduation-cap" aria-hidden="true" />
                                        <h5>Education</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="tab4">
                                <div className="col-md-10 about-left-w3layouts">
                                {experience.map((item,index)=>
                                index%2 === 0 ?
                                    <div className="about-info-w3-agileits" key={index}>
                                        <h6>{item.title}<span>{new Date(item.date_started).getFullYear()}-{new Date(item.date_ended).getFullYear()}</span></h6>
                                        <div className="clearfix"> </div>
                                        <p>{item.description}</p>
                                    </div>
                                    :
                                    <div className="about-info-w3-agileits mid-bar-agileits-w3layouts" key={index}>
                                        <h6>{item.title}<span>{new Date(item.date_started).getFullYear()}-{new Date(item.date_ended).getFullYear()}</span></h6>
                                        <div className="clearfix"> </div>
                                        <p>{item.description}</p>
                                    </div>
                                    )}
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
