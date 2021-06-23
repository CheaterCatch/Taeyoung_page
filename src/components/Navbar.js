import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../css/Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <img src={logo} alt="Test us logo" className="logo"/>
                <ul>
                    <li>About us</li>
                    <li>Make test</li>
                    <li>participate</li>
                </ul>
                <div className="login_buttons">
                    <a href="#">Log In</a>
                    <input type="button" value="Start now"></input>
                </div>
            </div>
        );
    }
}

export default Navbar;