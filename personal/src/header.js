import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'


const Header = () => {

    
        return (
            <div className="container">
                <div className="logo">
                    <a href="index.html"><img src={require("./images/logo.jpg")} title="" alt="Logo" /></a>
                </div>
                <div className="top-menu">
                    <div className="search">
                        <form>
                            <input type="text" placeholder="" required="" />
                            <input type="submit" value="" />
                        </form>
                    </div>
                    <span className="menu"> </span>
                    <ul>
                        <li className="active"><a href="index.html">HOME</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                        <div className="clearfix"> </div>
                    </ul>
                </div>
                <div className="clearfix"></div>
                
      

            </div >
        )
    
}

ReactDOM.render(
    <Header />,
    document.getElementById('header')
)
export default Header