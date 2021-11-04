import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './app';
import PageNotFound from './error_page/page_not_found';

const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/404' component={PageNotFound} />
                <App />
            </Switch>
        </HashRouter>
    </Provider>
);

export default Root;