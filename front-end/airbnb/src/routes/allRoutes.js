import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Path types
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';

// Universal paths
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import ListingResults from '../components/Listings/ListingResults/ListingResults';
import ListingResultsDetails from '../components/Listings/ListingResults/ListingResultsDetails';

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

// Guest paths
import GuestBoard from '../components/Guest/Guest';
import GuestReviewOverview from '../components/Guest/GuestReviewOverview';

export default function Routes () {
  return (
    <Switch>
      <AdminRoute exact path="/admin/users" component = {AdminUsers} />
      <AdminRoute exact path="/admin/users/:userId" component = {UserProfile} />
      <AdminRoute exact path="/admin/listings" component = {AdminListings}/>
      <AdminRoute exact path="/admin/listings/:listingId" component= {ListingDetails} /> 
      <AdminRoute exact path="/admin/reviews" component = {AdminReviews} />
      <AdminRoute exact path="/admin/reviews/:reviewId" component = {ReviewOverview} />
      <AdminRoute exact path="/admin/application-data" component = {ExtractApplicationData} />

      <Route exact path={["/", "/home"]} component={Home} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <Route exact path="/host/listings" component={HostBoard} />
      <Route exact path="/host/create-listing" component={CreateListing} />
      <Route exact path="/host/listings/:listingId" component={HostListingsDetails} />

      <Route exact path="/guest/reviews" component={GuestBoard} />
      <Route exact path="/guest/reviews/:reviewId" component={GuestReviewOverview} />

      <Route exact path="/results" component={ListingResults} />
      <Route exact path="/listings/:listingId" component={ListingResultsDetails} />

    </Switch>
  )
}