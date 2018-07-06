import React, { Component } from 'react';
import './App.css';


class ClientInline extends Component {
    render() {
        return (
            <div className="clients-section" id="clients">
                <div className="container">
                    <h4 className="title-top-w3 white">Beloved Customers<span>|</span></h4>
                    <h5 className="title-main-w3ls white">Testimonials</h5>
                    <div className="clients-main">
                        <div className="quote"><span className="fa fa-quote-left" /></div>
                        <div className="carousel slide" id="fade-quote-carousel" data-ride="carousel" data-interval={3000}>
                            <ol className="carousel-indicators">
                                <li data-target="#fade-quote-carousel" data-slide-to={0} className="active" />
                                <li data-target="#fade-quote-carousel" data-slide-to={1} />
                                <li data-target="#fade-quote-carousel" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="active item">
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio
                doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    </blockquote>
                                    <div className="profile-circle"><img src={require('./images/t1.jpg')} alt=" " className="img-responsive" /></div>
                                    <h6>Melissa Foucher</h6>
                                </div>
                                <div className="item">
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio
                doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    </blockquote>
                                    <div className="profile-circle"><img src={require('./images/t2.jpg')} alt=" " className="img-responsive" /></div>
                                    <h6>Andrew Parker</h6>
                                </div>
                                <div className="item">
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio
                doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    </blockquote>
                                    <div className="profile-circle"><img src={require('./images/t3.jpg')} alt=" " className="img-responsive" /></div>
                                    <h6>Jessica Brown</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default ClientInline;
