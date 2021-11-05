import React from 'react';
import CategorySplashContainer from '../categories/category_splash_container';
import WelcomeContainer from '../nav_bar/welcome_container';


const Splash = () => (
    <div>
        <CategorySplashContainer />
        <WelcomeContainer />
        <h2 className='splash-header'>Our picks for you</h2>
        one two three four five
        <h2 className='splash-header'>Popular works right now</h2>
        one two three four five
        <footer className='footer'>
            <div>
                <ul>
                    <li><b>Site</b></li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>Technologies</b></li>
                    <li>Ruby on Rails</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>Contact</b></li>
                    <li>GitHub</li>
                    <li>Linkedin</li>
                </ul>
            </div>
        </footer>
    </div>
);

export default Splash;