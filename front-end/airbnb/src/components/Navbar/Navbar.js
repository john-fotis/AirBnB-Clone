/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

class NavBar extends Component {
  render() { 
    return (
      <header>
        <nav className="navbar">
          <div className="nav-container">
            <Link className="navbar-logo" to={"/"}>Travel Advisor</Link>
            <div className="spacer" />
            <div className="navbar-items">
              <ul>
                <li>
                  <Link className="navigation-link" to={"/login"}>Sign in</Link>
                </li>
                <li>
                  <Link className="navigation-link" to={"/register"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
 
export default NavBar;