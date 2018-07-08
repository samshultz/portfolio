import React, { Component } from 'react';
import './App.css';


class StatInline extends Component {
    render() {
        return (
            <div className="stats">
                <div className="container">
                    <h4 className="title-top-w3 white">Proud of<span>|</span></h4>
                    <h5 className="title-main-w3ls white">Stats</h5>
                    <div className="stats_inner">
                        <div className="col-md-4 col-sm-6 col-xs-6 stat-grids">
                            <p className="counter">172</p>
                            <div className="stats-text-agile">
                                <h3>Projects Finished</h3>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-6 stat-grids">
                            <p className="counter">129</p>
                            <div className="stats-text-agile">
                                <h3>Satisfied Clients</h3>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-6 stat-grids">
                            <p className="counter">172</p>
                            <div className="stats-text-agile">
                                <h3>Sales</h3>
                            </div>
                        </div>
                        
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default StatInline;
