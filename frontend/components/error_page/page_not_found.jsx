import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <section className='page-not-found'>
        <div className='page-items'>
            <h1>Ooops... nothing to see here!</h1>
                <p>Sorry, the page you're looking for is not found.</p>
                <input className='searchbar' type='text' placeholder='Search for anything' />
                    <button type='submit'>Submit</button><br/><br/>
                <Link to='/'>Go back to Artisty.com</Link>
        </div>
    </section>
);

export default PageNotFound;