import React from 'react';
import Splash from './splash/splash';
import { Route, Link, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserShowContainer from './users/user_show_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/users/:userId" component={UserShowContainer} />
        </Switch>
    </div>
);

export default App;