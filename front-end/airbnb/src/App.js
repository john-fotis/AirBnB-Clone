/* eslint-disable no-unused-vars */
import React, { useState, Component } from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./_services/authentication.service";
import Routes from "./routes/allRoutes";
import { history } from './_helpers/history';
import { AuthContext } from "./context/auth";
import HiddenMenu from './components/HiddenMenu/HiddenMenu';

class App extends Component {
  constructor() {
    super();
    this.logOut = this.logOut.bind(this);

    this.state = {
      showHostBoard: false,
      showGuestBoard: false,
      showAdminBoard: false,
      dualRole: false,
      currentUser: JSON.parse(localStorage.getItem('user'))
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showHostBoard: user.roles.includes("ROLE_HOST"),
        showGuestBoard: user.roles.includes("ROLE_GUEST"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        dualRole: (user.roles.includes("ROLE_HOST") && user.roles.includes("ROLE_GUEST"))
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showHostBoard, showGuestBoard, showAdminBoard, dualRole } = this.state;

    return (
      <AuthContext.Provider value = { currentUser}>
        {dualRole && (
          <div style = {{width: '100%', height: '192%', position: 'absolute', top: '7%' , zIndex:'10',  paddingTop:'15%', backgroundImage: `url(${require('./images/main-background.jpg')})`}}>
            <div className='wrapper'>
              <div className='form-inner'>
                <ul style={{display: 'inline-block', textAlign: 'center', width: '100%'}}>
                  <li><h2>Please select the role you want for this session</h2></li>
                  <li>
                    <button onClick={e=>{this.setState({
                      showGuestBoard: false,
                      dualRole: false
                    })}}                            
                      className="submit-button btn btn-primary btn-block"
                      style={{width:'30%', display: 'table-cell', verticalAlign:'middle', marginTop: '30px'}}
                    >Host
                    </button>
                  </li>
                  <li>
                    <button onClick={e=>{this.setState({
                      showHostBoard: false,
                      dualRole: false
                    })}}                            
                      className="submit-button btn btn-primary btn-block"
                      style={{width:'30%', display: 'table-cell', verticalAlign:'middle', marginTop: '30px'}}
                      >Guest
                    </button>
                  </li>
                </ul>                
              </div>
            </div>
          </div>
        )}
        
        <div className="grid-container">
          <header className="header">
            <nav className="navbar">
              <Link to={'/'}>
                <img src= {require('./images/logo.jpg')} width='70px' height='60px' alt='logo' style={{marginTop: '-10px'}} />
                <div className = "spacer" />
              </Link>
              <div className = "brand" style={{marginLeft: '-20px'}}>
                <Link to={"/"} className="navbar-brand">
                  ravel Advisor
                </Link>
              </div>
              <div className = "spacer" />

              <div className="navbar-boards">

                {showHostBoard && (
                  <div className="navbar-boards">
                    <li className="nav-item">
                      <Link to={"/host/listings"} className="nav-link">
                        Host Board
                      </Link>
                    </li>
                      <li className="nav-item">
                      <Link to={"/host/create-listing"} className="nav-link">
                        Create Listing
                      </Link>
                    </li>
                  </div>
                )}

                {showGuestBoard && (
                  <div className="navbar-boards">
                    <li className="nav-item">
                      <Link to={"/guest/reviews"} className="nav-link">
                        Guest Board
                      </Link>
                    </li>
                  </div>
                )}

                {showAdminBoard && (
                  <div className="navbar-boards">
                    <li className="nav-item">
                      <Link to={"/admin/users/"} className="nav-link">
                        Users
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/admin/listings"} className="nav-link">
                        Listings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/admin/reviews"} className="nav-link">
                        Reviews
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/admin/application-data"} className="nav-link">
                        Application Data
                      </Link>
                    </li>
                  </div>
                )}

              </div>

              {currentUser ? (
                <div className="navbar-links">
                  <li className="nav-item">
                    <Link to={`/profile`} className="nav-link">
                      {currentUser.username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
              ) : (
                <div className="navbar-links">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </div>
              )}
            </nav>
          </header>

          <main className="main">
            {Routes()}
          </main>
          <footer className="footer">
            All right reserved.
          </footer>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;