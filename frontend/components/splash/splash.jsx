import React from 'react';
import CategorySplashContainer from '../categories/category_splash_container';
import WelcomeContainer from '../nav_bar/welcome_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

const Splash = () => (
    <div>
        <NavBarContainer />
        <CategorySplashContainer />
        <WelcomeContainer />
    </div>
);

export default Splash;