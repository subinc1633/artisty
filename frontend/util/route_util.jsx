import React from 'react';
import { Route, Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/' />
        )
    )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));