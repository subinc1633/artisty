import React from 'react';
import { Link } from 'react-router-dom';
import CategorySplash from './category_splash';
import SplashItem from './splash_item';
import SplashFanartItem from './splash_fanart_item';
import { IoArrowForwardSharp } from 'react-icons/io5';

const Splash = props => {
    const { items, categories, currentUser, fetchCategories, fetchItems } = props;

    return (
        <section>
            <CategorySplash categories={categories} fetchCategories={fetchCategories} />
            {currentUser ? (
                <div>
                    <h1 className='welcome'>Welcome back, <Link to={`/users/${currentUser.id}`}>{currentUser.name}</Link>!</h1>
                    <h2 className='splash-header'>Our picks for you</h2>
                    <br/><br/>
                    <div className='our-picks'>
                        <div className='left-splash-text'>
                            Items we think
                            <br/>
                            you'll love
                        </div>
                        <div className='random-items'>
                            <SplashItem fetchItems={fetchItems} items={items} />
                        </div>
                    </div>
                </div>) : 
            (
                <div>
                    <h1 className='welcome'>Find new pieces of art from artists worldwide.</h1>
                </div>
            )}
            <div className='splash-fanart-container'>
                <div className='left-splash-text'>
                    Fanart <span className='splash-fanart-arrow'><IoArrowForwardSharp /></span><br />
                    <p className='splash-fanart-description'>Artwork of different series / people</p>
                </div>
                <div className='splash-fanart-items'>
                    <SplashFanartItem categories={categories} fetchCategories={fetchCategories} />
                </div>
            </div>
            <h2 className='splash-header'>Popular works right now</h2>
            <section>one two three four five</section>
        </section>
)};

export default Splash;