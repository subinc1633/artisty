import React from 'react';
import Splash from './splash/splash';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import UserShowContainer from './users/user_show_container';
import Modal from './modal/modal';
import ItemShowContainer from './items/item_show_container';
import CategoryIndexContainer from './categories/category_index_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Modal />
        <Switch>
            <Route exact path='/' component={Splash} />
            <Route path='/users/:userId' component={UserShowContainer} />
            <Route path='/categories' component={CategoryIndexContainer} />
            <Route path='/items/:itemId' component={ItemShowContainer} />
        </Switch>
    </div>
);

export default App;