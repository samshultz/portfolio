import React, { Component } from 'react';
import './App.css';


class WorkInline extends Component {
    render() {
        return (
            <div className="works-section" id="works">
                <div className="container">
                    <h4 className="title-top-w3">Some Effort<span>|</span></h4>
                    <h5 className="title-main-w3ls">Awesome Works</h5>
                    <div className="col-md-7 work-left">
                        <div className="work-imgl zoom-img">
                        </div>
                        <div className="work-info">
                            <h4>Adipisci velit</h4>
                            <p>Font and branding design for Printing company.</p>
                            <a href="" data-toggle="modal" data-target="#myModal1">Read more</a>
                        </div>
                        <div className="clearfix"> </div>
                        <div className="work2-images">
                            <div className="col-md-6 col-sm-6 col-xs-6 work1">
                                <a href="" data-toggle="modal" data-target="#myModal3">
                                    <img src={require('./images/w3.jpg')} alt=" " className="img-responsive" />
                                </a>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 work2">
                                <a href="" data-toggle="modal" data-target="#myModal4">
                                    <img src={require('./images/w4.jpg')} alt=" " className="img-responsive" />
                                </a>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <div className="col-md-5  work-right">
                        <div className="work-imgr">
                        </div>
                        <div className="work-info">
                            <h4>Lorem ipsum</h4>
                            <p>Accessory design and corporate style for Elite Stationery Shop</p>
                            <a href="" data-toggle="modal" data-target="#myModal2">Read more</a>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default WorkInline;
