import React from 'react';
<<<<<<< HEAD
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
=======
import WelcomeContainer from '../welcome/welcome_container';
import ItemIndexContainer from '../items/item_index_container';

const Splash = () => (
    <header>
        <WelcomeContainer />
        <ItemIndexContainer />
    </header>
>>>>>>> splash
);

export default Splash;