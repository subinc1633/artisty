import React from 'react';
import Splash from './splash/splash';
import { Route, Switch, Redirect } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserShowContainer from './users/user_show_container';
import Modal from './modal/modal';
import ItemShowContainer from './items/item_show_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import CategoryIndexContainer from './categories/category_index_container';
import CategoryShowContainer from './categories/category_show_container';
import Footer from './footer/footer';

const App = () => {
    return (
        <div>
            <NavBarContainer />
            <Modal />
            <Switch>
                <Route exact path='/' component={Splash} />
                <Route path='/users/:userId' component={UserShowContainer} />
                <Route path='/categories/:categoryId' component={CategoryShowContainer} />
                <Route path='/items/:itemId' component={ItemShowContainer} />
                <Route path='/categories' component={CategoryIndexContainer} />
                <Redirect to='/404' />
            </Switch>
            <Footer />
        </div>
    )
};

export default App;