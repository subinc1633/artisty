import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div className='not-found-background'>
        <nav className='not-found-bar'>
            <Link to='/'><h2 className='artisty'>Artisty</h2></Link>
        </nav>
        <section className='page-not-found'>
            <h1>Ooops... nothing to see here!</h1>
                <p>Sorry, the page you're looking for is not found.</p>
                <input className='searchbar' type='text' placeholder='Search for anything' />
                    <button type='submit'>Submit</button><br/><br/>
                <Link to='/'>Go back to Artisty.com</Link>
        </section>
    </div>
);

export default PageNotFound;