import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import { Route } from 'react-router';
import { AuthRoute } from '../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
    <div>
        <header>
            <h1>Artisty</h1>
            <WelcomeContainer />
        </header>

        <AuthRoute path="/" component={LoginFormContainer}/>
        <AuthRoute path="/" component={SignupFormContainer}/>
    </div>
);

export default App;