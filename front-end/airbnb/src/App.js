// /* eslint-disable no-unused-vars */
// import React, {useState} from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import NavBar from "./components/Navbar/Navbar";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import HiddenMenu from "./components/HiddenMenu/HiddenMenu";
// import { ReactiveBase, DataSearch, NumberBox, DateRange, RangeSlider } from '@appbaseio/reactivesearch';
// import ListingsFind from './components/Listings/ListingsFind/ListingsFind'
// import { history } from './_helpers/history';
// import { Role } from './components/Permissions/permissions';
// import { authenticationService } from './_services/authentication.service';
// import Home from './pages/home/Home';
// import Admin from './pages/admin/Admin';
// import Routes from './routes/allRoutes';
// import PrivateRoute from './routes/PrivateRoute';
// import { AuthContext } from "./context/auth";
// import axios from 'axios';

// function App(props) {
//   // const existingTokens = JSON.parse(localStorage.getItem("token"));
//   // const [authTokens, setAuthTokens] = useState(existingTokens);

//   // const setTokens = (data) => {
//   //   const response = JSON.parse(data);
//   //   localStorage.setItem("token", response.accessToken);
//   //   setAuthTokens(response.accessToken);
//   // }
//   var isLoggedIn = false;

//   if (localStorage.getItem("token")){
//     isLoggedIn = true;
//   }

//   return (
//     <AuthContext.Provider value={isLoggedIn}>
//       <BrowserRouter history = {history}>
//         <div className="App">
//           <NavBar />
//           <HiddenMenu />
//           <Routes />
//           {/* <ListingsFind /> */}
//         </div>
//       </BrowserRouter>
//     </AuthContext.Provider>
  
//   );
// }

// export default App;


import React, { Component } from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./_services/authentication.service";
import Routes from "./routes/allRoutes";

// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
// import HostBoard from "./pages/host/Host";
// // import BoardModerator from "./components/board-moderator.component";
// import AdminBoard from "./pages/admin/Admin";

// import Routes from './routes/allRoutes';
// import PrivateRoute from './routes/PrivateRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showHostBoard: false,
      showAdminBoard: false,
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showHostBoard: user.roles.includes("ROLE_HOST"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showHostBoard, showAdminBoard } = this.state;

    return (
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
                  <Link to={"/mod"} className="nav-link">
                    Host Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
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
    );
  }
}

export default App;