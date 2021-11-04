import React from 'react';
import Splash from './splash/splash';
import { Route, Switch, Redirect } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserShowContainer from './users/user_show_container';
import Modal from './modal/modal';
import ItemShowContainer from './items/item_show_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <NavBarContainer />
            <Modal />
            <Switch>
                <Route exact path='/' component={Splash} />
                <Route path='/users/:userId' component={UserShowContainer} />
                <Route path='/items/:itemId' component={ItemShowContainer} />
                <Redirect to='/404' />
            </Switch>
        </div>
    )
};

export default App;