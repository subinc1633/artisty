import React from 'react';
import Splash from './splash/splash';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import UserShowContainer from './users/user_show_container';

const App = () => (
    <div>
        <Route path='/' component={Splash} />
        <Route path='/users/:userId' component={UserShowContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
);

export default App;