import React from 'react';
import Splash from './splash/splash';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import UserShowContainer from './users/user_show_container';
import Modal from './modal/modal';

const App = () => (
    <div>
<<<<<<< HEAD
        <Route path='/' component={Splash} />
        <Route path='/users/:userId' component={UserShowContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
=======
        <NavBarContainer />
        <Modal />
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/users/:userId" component={UserShowContainer} />
        </Switch>
>>>>>>> splash
    </div>
);

export default App;