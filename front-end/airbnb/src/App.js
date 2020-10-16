import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./_services/authentication.service";
import Routes from "./routes/allRoutes";
import { AuthContext } from "./context/auth";
import Helmet from 'react-helmet';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.logOut = this.logOut.bind(this);

    this.state = {
      showHostBoard: false,
      showGuestBoard: false,
      showAdminBoard: false,
      dualRole: false,
      currentUser: JSON.parse(localStorage.getItem('user')),
      logged: false
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user && !this.state.logged) {
      this.setState({
        logged: true
      });
      if(!this.state.logged){
        this.setState({
          currentUser: user,
          showHostBoard: user.roles.includes("ROLE_HOST"),
          showGuestBoard: user.roles.includes("ROLE_GUEST"),
          showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          dualRole: (user.roles.includes("ROLE_HOST") && user.roles.includes("ROLE_GUEST"))
        });
      }
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({logged: false});
  }

  render() {
    const { currentUser, showHostBoard, showGuestBoard, showAdminBoard, dualRole } = this.state;

    return (
      <AuthContext.Provider value = { currentUser}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Travel Advisor</title>
          </Helmet>
        {dualRole && (
          <div style = {{width: '100%', height: '105%', position: 'absolute', top: '0%' , zIndex:'10',  paddingTop:'15%', backgroundImage: `url(${require('./images/main-background.jpg')})`}}>
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
                <img id="logo" src= {require('./images/logo-text.jpg')} 
                  width='400px' height='60px' alt='logo'
                  style={{marginBottom: '8px'}}/>
              </Link>
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
                      <Link to={"/guest/bookings"} className="nav-link">
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
                      Logout
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
            &copy;	All rights reserved
          </footer>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;