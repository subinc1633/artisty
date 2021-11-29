import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack, IoSearch } from 'react-icons/io5';

const PageNotFound = () => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="not-found-background">
            <nav className="not-found-bar">
                <Link to="/"><h2 className="artisty">Artisty</h2></Link>
            </nav>
            <section className="page-not-found">
                <h1>Ooops... nothing to see here!</h1>
                    <p>Sorry, the page you're looking for is not available.</p><br/>
                    <form className="searchbar" action="/" method="get">
                        <label htmlFor="searchbar">
                            <span className="hide-label">Search for anything</span>
                        </label>
                        <input
                            type="text"
                            id="searchbar"
                            placeholder="Search for anything"
                            value={search}
                            onChange={e => handleChange(e)}
                            name="s"
                        />
                        <button type="submit"><IoSearch /></button>
                    </form><br/>
                <Link to="/"><IoArrowBack className="redirect-arrow-left" /> Go back to Artisty.com</Link>
            </section>
        </div>
)};

export default PageNotFound;