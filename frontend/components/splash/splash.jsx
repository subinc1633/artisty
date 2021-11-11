import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategorySplash from './category_splash';
import SplashItem from './splash_item';
import SplashFanartItem from './splash_fanart_item';
import PopularItems from './popular_items';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { sampleSize } from 'lodash';

const Splash = props => {
    const { items, categories, currentUser, fetchCategories, fetchItems } = props;

    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, [setAllCategories]);

    return (
        <section>
            <CategorySplash categories={categories} />
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

            {
                sampleSize(categories, 1).map((category, idx) => (
                    <div key={idx} className='splash-fanart-container'>
                        <div className='left-splash-text'>
                            <Link to={`/categories/${category.id}`}>{category.title}<span className='splash-fanart-arrow'><IoArrowForwardSharp /></span></Link><br />
                            <p className='splash-fanart-description'>{category.description}</p>
                        </div>
                        <div className='splash-fanart-items'>
                            <ul>
                                {
                                    category.items ? sampleSize(Object.values(category.items), 4).map((item, idx) => (
                                        <SplashFanartItem key={idx} item={item} />
                                    )) : null
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
                
            <div className='popular-items-list'>
                <h2 className='popular-item-header'>Popular works right now</h2>
                <PopularItems fetchItems={fetchItems} items={items} />
            </div>

            <div className='artisty-definition-container'>
                <h2>What is Artisty?</h2>
                <p>Artisty is an online marketplace where <i>artists</i> can showcase and sell their work, </p>
            </div>
        </section>
)};

export default Splash;