/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/Navbar/Navbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HiddenMenu from "./components/HiddenMenu/HiddenMenu";
import { ReactiveBase, DataSearch, NumberBox, DateRange, RangeSlider } from '@appbaseio/reactivesearch';
import ListingsFind from './components/Listings/ListingsFind/ListingsFind'
import { history } from './_helpers/history';
import { Role } from './components/Permissions/permissions';
import { authenticationService } from './_services/authentication.service';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
// import { PrivateRoute } from './components/PrivateRoute';
// import { HomePage } from './pages/home/Home';
import Routes from './routes/allRoutes';
import PrivateRoute from './routes/PrivateRoute';
import { AuthContext } from "./context/auth";

import { configureFakeBackend } from './_helpers/fake-backend';
configureFakeBackend();
// import { AdminPage } from '@/AdminPage';

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  
  return (
    <AuthContext.Provider value={false}>
      <BrowserRouter history = {history}>
        <div className="App">
          <NavBar />
          <HiddenMenu />
          <Routes />
          {/* <ListingsFind /> */}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  
  );
}

export default App;