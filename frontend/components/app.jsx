import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
    <div>
        <header>
            <h1>Artisty</h1>
            <WelcomeContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
    </div>
);

export default App;