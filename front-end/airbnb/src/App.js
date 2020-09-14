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
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showHostBoard, showGuestBoard, showAdminBoard } = this.state;

    return (
      <AuthContext.Provider value = { currentUser}>
        <div className="grid-container">
          <header className="header">
            <nav className="navbar">
              <HiddenMenu />
              <div className = "spacer" />
              <div className = "brand">
                <Link to={"/"} className="navbar-brand">
                  Travel Advisor
                </Link>
              </div>
              <div className = "spacer" />

              <div className="navbar-boards">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </li>

                {showHostBoard && (
                  <div className="navbar-boards">
                    <li className="nav-item">
                      <Link to={"/users/" + currentUser.id} className="nav-link">
                        Host Board
                      </Link>
                    </li>
                      <li className="nav-item">
                      <Link to={"/host/listings"} className="nav-link">
                        Create Listing
                      </Link>
                    </li>
                  </div>
                )}

                {showGuestBoard && (
                  <div className="navbar-boards">
                    <li className="nav-item">
                      <Link to={"/users/" + currentUser.id} className="nav-link">
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
                  </div>
                )}

              </div>

              {currentUser ? (
                <div className="navbar-links">
                  <li className="nav-item">
                    <Link to={"/admin/profile"} className="nav-link">
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
          <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onclick="closeMenu()">x</button>
            <ul>
              <li>
                <a href="index.html">Pants</a>
              </li>

              <li>
                <a href="index.html">Shirts</a>
              </li>

            </ul>
          </aside>
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