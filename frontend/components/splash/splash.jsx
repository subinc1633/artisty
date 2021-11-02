import React from 'react';
import WelcomeContainer from '../nav_bar/welcome_container';
import { Link } from 'react-router-dom';

const Splash = () => (
    <div>
        <header>
            <Link to='/'><h3>Artisty</h3></Link>
            <WelcomeContainer />
        </header>
        <section>
            
        </section>
    </div>
);

export default Splash;