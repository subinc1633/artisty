import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useLocation, useHistory } from 'react-router';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [buttonClass, setButtonClass] = useState('nav-search-button');
    let history = useHistory();
    let location = useLocation();

    let searchParams = new URLSearchParams(location.search);
    searchParams.set('q', query);
    let searchVal = searchParams.toString();

    useEffect(() => {
        setButtonClass('nav-search-button');
    }, [location])

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/search?${searchVal}`);
        setQuery('');
    }

    const handleChange = e => {
        setQuery(e.currentTarget.value);
    };

    const toggleButtonClass = () => {
        if (buttonClass === 'nav-search-button') {
            setButtonClass('nav-search-button-focus');
        } else {
            setButtonClass('nav-search-button');
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label className="hide-label" htmlFor="searchbar">Search for anything</label>
            <input
                type="text"
                id="searchbar"
                placeholder="Search for anything"
                value={query}
                onChange={e => handleChange(e)}
                onFocus={() => toggleButtonClass()}
                onBlur={() => toggleButtonClass()}
            />
            <button className={buttonClass}><span><IoSearch /></span></button>
        </form>
    );
}

export default SearchBar;