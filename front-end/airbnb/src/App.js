/* eslint-disable no-unused-vars */
import React, { useState, Component } from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./_services/authentication.service";
import Routes from "./routes/allRoutes";
import { history } from './_helpers/history';
import { AuthContext } from "./context/auth";

class App extends Component {
  constructor(props) {
    super(props);
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
        <Router>
          <div className = "body">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <Link to={"/"} className="navbar-brand">
                Travel Advisor
              </Link>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </li>

                {showHostBoard && (
                  <li className="nav-item">
                    <Link to={"/users/" + currentUser.id} className="nav-link">
                      Host Board
                    </Link>
                  </li>
                )}

                {showGuestBoard && (
                  <li className="nav-item">
                    <Link to={"/users/" + currentUser.id} className="nav-link">
                      Host Board
                    </Link>
                  </li>
                )}

                {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/admin/users/"} className="nav-link">
                      Admin Board
                    </Link>
                  </li>
                )}

                {currentUser && (
                  <li className="nav-item">
                    <Link to={"/user"} className="nav-link">
                      User
                    </Link>
                  </li>
                )}
              </div>

              {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
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
                <div className="navbar-nav ml-auto">
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

            <div className="container mt-3">
              {Routes()} 
            </div>
          </div>
        </Router>
      </AuthContext.Provider>
      
    );
  }
}

export default App;