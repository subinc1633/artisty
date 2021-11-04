import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';

class PageNotFound extends React.Component { 
    render () {
        return (
            <div className='not-found-background'>
                <nav className='not-found-bar'>
                    <Link to='/'><h2 className='artisty'>Artisty</h2></Link>
                </nav>
                <section className='page-not-found'>
                    <h1>Ooops... nothing to see here!</h1>
                        <p>Sorry, the page you're looking for is not found.</p><br/>
                        <p className='searchbar'>
                            <input type='text' placeholder='Search for anything' />
                        <button type='submit'><FaSearch /></button>
                        </p><br/>
                    <Link to='/'><FaArrowLeft className='redirect-arrow-left' /> Go back to Artisty.com</Link>
                </section>
            </div>
        );
    }
}

export default PageNotFound;