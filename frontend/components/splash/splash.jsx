import React from 'react';
import WelcomeContainer from '../welcome/welcome_container';
import ItemIndexContainer from '../items/item_index_container';

const Splash = () => (
    <header>
        <WelcomeContainer />
        <ItemIndexContainer />
    </header>
);

export default Splash;