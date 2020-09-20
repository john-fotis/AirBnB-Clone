import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../context/auth";
import AuthService from '../_services/authentication.service';

function HostRoute({ component: Component, ...rest }) {
    const isAuthenticated = useAuth();

    return(
        <Route
            {...rest}
            render={props =>
            (isAuthenticated && AuthService.getCurrentUser().roles.includes("ROLE_HOST")) ? (
                <Component {...props} />
            ) : (
                <div>
                    <Redirect to="/login" />
                    {alert('You need to login as Host!')}
                </div>
            )
            }
        />
    );
}

export default HostRoute;