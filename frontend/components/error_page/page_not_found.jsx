import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import SearchBar from '../nav_bar/search_bar';

const PageNotFound = () => {
    return (
        <div className="not-found-background">
            <nav className="not-found-bar">
                <Link to="/"><h2 className="artisty">Artisty</h2></Link>
            </nav>
            <section className="page-not-found">
                <h1>Ooops... nothing to see here!</h1>
                <p>Sorry, the page you're looking for is not available.</p><br/>
                <p className="searchbar"><SearchBar/></p><br/>
                <Link to="/"><IoArrowBack className="redirect-arrow-left" /> Go back to Artisty.com</Link>
            </section>
        </div>
)};

export default PageNotFound;