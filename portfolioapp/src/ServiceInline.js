import React, { Component } from 'react';
import './App.css';


class ServiceInline extends Component {
    render() {
        return (
            <div className="services-section" id="services">
                <div className="container">
                    <h4 className="title-top-w3">Incredible<span>|</span></h4>
                    <h5 className="title-main-w3ls">Services</h5>
                    <div className="col-md-7 services-left">
                        <div className="services-grids-wthree">
                            <div className="icon-left-agile">
                                <span className="fa fa-file-image-o" aria-hidden="true" />
                            </div>
                            <div className="icon-right text-left">
                                <h5>Creative Web Design</h5>
                                <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat..</p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="services-grids-wthree">
                            <div className="icon-right text-right">
                                <h5>Animation</h5>
                                <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat..</p>
                            </div>
                            <div className="icon-left-agile">
                                <span className="fa fa-font" aria-hidden="true" />
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="services-grids-wthree">
                            <div className="icon-left-agile">
                                <span className="fa fa-line-chart" aria-hidden="true" />
                            </div>
                            <div className="icon-right text-left">
                                <h5>Strategy &amp; Consultng</h5>
                                <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat..</p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="services-grids-wthree">
                            <div className="icon-right text-right">
                                <h5>Digital Marketing</h5>
                                <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat..</p>
                            </div>
                            <div className="icon-left-agile">
                                <span className="fa fa-bar-chart" aria-hidden="true" />
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <div className="col-md-5 services-right">
                        <img src={require('./images/trans.png')} alt=" " className="img-responsive" />
                    </div>
                </div>
            </div>

        );
    }
}

export default ServiceInline;
