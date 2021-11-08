import React from 'react';
import CategorySplashContainer from '../categories/category_splash_container';
import WelcomeContainer from './welcome_container';


const Splash = () => (
    <div>
        <CategorySplashContainer />
        <WelcomeContainer />
        <h2 className='splash-header'>Our picks for you</h2>
        one two three four five
        <h2 className='splash-header'>Popular works right now</h2>
        one two three four five
    </div>
);

export default Splash;