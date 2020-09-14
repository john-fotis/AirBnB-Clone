/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Home from '../pages/home/Home';
import AdminUsers from '../components/Admin/AdminUsers';
import AdminListings from '../components/Admin/AdminListings';
import HostBoard from '../pages/host/Host';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Profile from '../pages/profile/Profile';
import GuestBoard from '../pages/guest/Guest'
import Listing from '../components/Listings/Listing/Listing';
import ListingsFind from '../components/Listings/ListingsFind/ListingsFind'
import UsersList from '../components/Admin/UsersList' 
import UserProfile from '../components/Admin/UserProfile';
import ListingDetails from '../components/Admin/ListingDetails';
import userService from '../_services/user.service';

export default function Routes () {
  return (
    <Switch>
      <AdminRoute exact path="/admin" component={UsersList} />     
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path={["/", "/home"]} component={Home} />
      <PrivateRoute exact path="/admin/profile" component={Profile} />
      <Route path="/host" component={HostBoard} />
      <Route path="/guest" component={GuestBoard} />
      <Route path="/host/listings" component = {Listing} />
      <AdminRoute exact path="/admin/users" component={AdminUsers} />
      <AdminRoute exact path="/admin/users/:userId" component= {UserProfile}/>
      <AdminRoute exact path="/admin/listings" component={AdminListings} />
      <AdminRoute exact path="/admin/listings/:listingId" component= {ListingDetails}/>
    </Switch>
  )
}