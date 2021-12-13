import React from 'react';
import { Link } from 'react-router-dom';
import SplashGrid from './splash-grid';
import CategorySplash from './category_splash';
import SplashItem from './splash_item';
import SplashFanartItem from './splash_fanart_item';
import PopularItems from './popular_items';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { sampleSize } from 'lodash';

const Splash = props => {
    const { items, categories, currentUser, fetchItems } = props;

    return (
        <section>
            <CategorySplash categories={categories} />
            {currentUser ? (
                <div>
                    <h1 className="welcome">Welcome back, <Link to={`/users/${currentUser.id}`}>{currentUser.name}</Link>!</h1>
                    <div className="grid-container">
                        <SplashGrid fetchItems={fetchItems} />
                    </div>
                    <h2 className="splash-header">Our picks for you</h2>
                    <br/><br/>
                    <div className="our-picks">
                        <div className="left-splash-text">
                            Items we think
                            <br/>
                            you'll love
                        </div>
                        <div className="random-items">
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
                    <div key={idx} className="splash-fanart-container">
                        <div className="left-splash-text">
                            <Link to={`/categories/${category.id}`}>{category.title}<span className="splash-fanart-arrow"><IoArrowForwardSharp /></span></Link><br />
                            <p className="splash-fanart-description">{category.description}</p>
                        </div>
                        <div className="splash-fanart-items">
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
                
            <div className="popular-items-list">
                <h2 className="popular-item-header">Popular works right now</h2>
                <div className="popular-item-container"><PopularItems items={items} /></div>
            </div>

            <div className="artisty-info-container">
                <h2 className="artisty-info-header">What is Artisty?</h2>
                <div className="artisty-info-para-container">
                    <p className="artisty-info-para"><span className="artisty-name">Artisty</span> is an online marketplace where artists can showcase, share and sell their work.
                        We aim to promote artists all around the world and offer an outlet of creativity.
                        If you are interested in sharing your artwork or reviewing the amazing art of others, come join our community!<br/>
                    </p><br/><br/>
                    <p className="artisty-info-question"><b>Have a question?</b><br/>
                        <a href="https://www.linkedin.com/in/sc1633/"><button>Contact Us</button></a>
                    </p>
                </div>
            </div>
        </section>
)};

export default Splash;