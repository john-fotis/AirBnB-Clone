/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import HomePage from '../pages/home/Home';
import Home from '../pages/home/Home';
import AdminBoard from '../pages/admin/Admin';
import HostBoard from '../pages/host/Host';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/profile/Profile';


export default function Routes () {
  return (
    <Switch>
      <PrivateRoute exact={true} path="/admin" component={AdminBoard} />     
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/register" component={Register} />
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/user" component={HostBoard} />
      {/* <Route path="/mod" component={BoardModerator} /> */}
    </Switch>
  )
}