import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../actions/item_actions';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
    const [items, setItems] = useState({});
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetchItems();
    }, [items]);

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChange = () => {
        return e => setQuery(e.currentTarget.value);
    };
    
    return (
        <form className="nav-searchbar" onSubmit={handleSubmit}>
            <label className="hide-label" htmlFor="searchbar">Search for anything</label>
            <input type="text" id="searchbar" placeholder="Search for anything" value={query} onChange={handleChange} />
                <ul>
                    {
                        Object.values(items).filter(item => {
                            if (query === '') {
                                return item;
                            } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
                                return item;
                            }
                        }).map((item, idx) => (
                            <li key={idx}>{item.title}</li>
                        ))
                    }
                </ul>
            <button className="nav-search-button" type="submit"><span><IoSearch /></span></button>
        </form>
    );
}

export default SearchBar;