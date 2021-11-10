import React from 'react';
import CategorySplashContainer from '../categories/category_splash_container';
import { SplashItem } from '../items/splash_item';
import WelcomeContainer from './welcome_container';


const Splash = () => (
    <div>
        <CategorySplashContainer />
        <WelcomeContainer />
        <h2 className='splash-header'>Our picks for you</h2>
        <ul>
            <SplashItem />
        </ul>
        <h2 className='splash-header'>Popular works right now</h2>
        <section>one two three four five</section>
    </div>
);

export default Splash;