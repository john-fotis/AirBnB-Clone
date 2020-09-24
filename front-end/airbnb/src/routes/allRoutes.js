import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Path types
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import HostRoute from './HostRoute';
import GuestRoute from './GuestRoute';

// Universal paths
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import ListingResults from '../components/Listings/Results/ListingResults';
import ListingResultsDetails from '../components/Listings/Results/ListingResultsDetails';

// Admin paths
import AdminUsers from '../components/Admin/AdminUsers';
import UserProfile from '../components/Admin/UserProfile';
import AdminListings from '../components/Admin/AdminListings';
import ListingDetails from '../components/Admin/ListingDetails';
import AdminReviews from '../components/Admin/AdminReviews';
import ReviewOverview from '../components/Admin/ReviewOverview';
import ExtractApplicationData from '../components/Admin/ExtractApplicationData';

// Host paths
import HostBoard from '../components/Host/Host';
import CreateListing from '../components/Listings/Create/CreateListing';
import HostListingsDetails from '../components/Host/HostListingDetails';
import HostMessages from '../components/Host/HostMessages';
import HostMessageReply from '../components/Host/HostMessageReply';

// Guest paths
import GuestBoard from '../components/Guest/Guest';
import GuestBooking from '../components/Guest/GuestBooking';
import GuestChat from '../components/Guest/GuestChat';
import GuestReview from '../components/Guest/GuestReview';

export default function Routes () {
  return (
    <Switch>
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path="/login" component = {Login} />
      <Route exact path="/register" component = {Register} />
      <PrivateRoute exact path="/profile" component = {Profile} />
      <Route exact path="/results" component = {ListingResults} />
      <Route exact path="/listings/:listingId" component = {ListingResultsDetails} />

      <AdminRoute exact path="/admin/users" component = {AdminUsers} />
      <AdminRoute exact path="/admin/users/:userId" component = {UserProfile} />
      <AdminRoute exact path="/admin/listings" component = {AdminListings}/>
      <AdminRoute exact path="/admin/listings/:listingId" component= {ListingDetails} /> 
      <AdminRoute exact path="/admin/reviews" component = {AdminReviews} />
      <AdminRoute exact path="/admin/reviews/:reviewId" component = {ReviewOverview} />
      <AdminRoute exact path="/admin/application-data" component = {ExtractApplicationData} />

      <HostRoute exact path="/host/listings" component={HostBoard} />
      <HostRoute exact path="/host/create-listing" component={CreateListing} />
      <HostRoute exact path="/host/listings/:listingId" component={HostListingsDetails} />
      <HostRoute exact path="/host/messages" component={HostMessages} />
      <HostRoute exact path="/host/messages/:messageId" component={HostMessageReply} />

      <GuestRoute exact path="/guest/bookings" component={GuestBoard} />
      <GuestRoute exact path="/guest/bookings/:bookingId" component={GuestBooking} />
      <GuestRoute exact path="/guest/messages" component={GuestChat} />
      <GuestRoute exact path="/guest/reviews" component={GuestReview} />

    </Switch>
  )
}