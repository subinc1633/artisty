import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChange = e => {
        setQuery(e.currentTarget.value);
    };

    const allItems = useSelector((state) => state['entities'].items);
    
    return (
        <form className="nav-searchbar" onSubmit={handleSubmit}>
            <label className="hide-label" htmlFor="searchbar">Search for anything</label>
            <input type="text" id="searchbar" placeholder="Search for anything" value={query} onChange={e => handleChange(e)} />
            <button className="nav-search-button" type="submit"><span><IoSearch /></span></button>
            <div className="nav-searched-items">
                {
                    Object.values(allItems).filter(item => {
                        if (query === '') {
                            return item;
                        } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
                            return item;
                        }
                    }).map((item, idx) => (
                        <li key={idx}>{item.title}</li>
                    ))
                }
            </div>
            
        </form>
    );
}

// const mSTP

export default SearchBar;