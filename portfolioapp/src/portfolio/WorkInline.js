import React from 'react';


const WorkInline = (props) => {
    
        const {projects} = props.projects
        
        return (
            <div>
            <div className="works-section" id="works">
                <div className="container">
                    <h4 className="title-top-w3">Some Effort<span>|</span></h4>
                    <h5 className="title-main-w3ls">Awesome Works</h5>
                    <div className="col-md-12">
            
                        <div className="work2-images">
                        {projects.map((project, index)=>
                        <div key={index}>
                            <div className="col-md-6 col-sm-6 col-xs-6 work1">
                                <a href="" data-toggle="modal" data-target="#myModal3" onClick={(event)=>props.setModalContent(event, index)}>
                                    <img src={project.img} alt=" " className="img-responsive" />
                                </a>
                            </div>
                        </div>
                        )}
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            
            </div>

        );
    }


export default WorkInline;
