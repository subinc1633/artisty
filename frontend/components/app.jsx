import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route, Switch, Redirect } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserShowContainer from './users/user_show_container';
import Modal from './modal/modal';
import ScrollToTop from './scroll/scroll_to_top';
import ItemShowContainer from './items/item_show_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import CategoryIndexContainer from './categories/category_index_container';
import CategoryShowContainer from './categories/category_show_container';
import SearchPage from './search_page/search_page';
import Footer from './footer/footer';

const App = () => {
    return (
        <div className='app'>
            <ScrollToTop />
            <NavBarContainer />
            <Modal />
            <Switch>
                <Route exact path='/' component={SplashContainer} />
                <Route path='/users/:userId' component={UserShowContainer} />
                <Route path='/categories/:categoryId' component={CategoryShowContainer} />
                <Route path='/items/:itemId' component={ItemShowContainer} />
                <Route path='/categories' component={CategoryIndexContainer} />
                <Route path='/search' component={SearchPage} />
                <Redirect to='/404' />
            </Switch>
            <Footer />
        </div>
    )
};

export default App;