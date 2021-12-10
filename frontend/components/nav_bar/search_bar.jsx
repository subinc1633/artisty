import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { useHistory } from 'react-router';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    let history = useHistory();

    let searchParams = new URLSearchParams(history.location.search);
    searchParams.set('q', query);
    let searchVal = searchParams.toString();

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/search?${searchVal}`);
        setQuery('');
    }

    const handleChange = e => {
        setQuery(e.currentTarget.value);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label className="hide-label" htmlFor="searchbar">Search for anything</label>
            <input type="text" id="searchbar" placeholder="Search for anything" value={query} onChange={e => handleChange(e)} />
            <button className="nav-search-button"><IoSearch /></button>
        </form>
    );
}

export default SearchBar;