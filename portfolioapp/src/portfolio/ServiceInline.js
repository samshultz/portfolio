import React from 'react';


const ServiceInline = (props) => {
    
        let {services} = props.services
        return (
            <div className="services-section" id="services">
                <div className="container">
                    <h4 className="title-top-w3">Incredible<span>|</span></h4>
                    <h5 className="title-main-w3ls">Services</h5>
                    <div className="col-md-7 services-left">
                    {services.map((service, index)=>
                    index%2 ===0 ?
                        <div className="services-grids-wthree" key={index}>
                            <div className="icon-left-agile">
                                <span className="fa fa-file-image-o" aria-hidden="true" />
                            </div>
                            <div className="icon-right text-left">
                                <h5>{service.name}</h5>
                                <p>{service.description}</p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        :
                        <div className="services-grids-wthree" key={index}>
                            <div className="icon-right text-right">
                            <h5>{service.name}</h5>
                            <p>{service.description}</p>
                            </div>
                            <div className="icon-left-agile">
                                <span className="fa fa-font" aria-hidden="true" />
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        )}                        
                        
                    </div>
                    <div className="col-md-5 services-right">
                        <img src={require('../images/trans.png')} alt=" " className="img-responsive" />
                    </div>
                </div>
            </div>

        );
    }


export default ServiceInline;
