import React from 'react';



const Alert = () => {


   
        return (
            <div className="alert alert-success alert-dismissible" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                <strong>Success!</strong> Thanks for contacting me I'll get back to you as soon as possible
            </div>

        );
    }


export default Alert;
