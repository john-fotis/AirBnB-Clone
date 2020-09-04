/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import HomePage from '../pages/home/Home';
import Home from '../pages/home/Home';
import Admin from '../pages/admin/Admin';
import PrivateRoute from './PrivateRoute';



export default function Routes () {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />  
      <PrivateRoute exact={true} path="/admin" component={Admin} />     
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/register" component={Register} />
    </Switch>
  )
}