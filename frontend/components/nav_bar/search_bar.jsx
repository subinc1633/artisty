import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../actions/item_actions';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetchItems();
    }, [data]);

    debugger

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChange = e => {
        setQuery(e.currentTarget.value);
        // if (data.length > 0) {
        //     fetchItems().then()
        // }
    };
    
    return (
        <form className="nav-searchbar" onSubmit={handleSubmit}>
            <label className="hide-label" htmlFor="searchbar">Search for anything</label>
            <input type="text" id="searchbar" placeholder="Search for anything" value={query} onChange={e => handleChange(e)} />
            <button className="nav-search-button" type="submit"><span><IoSearch /></span></button>
            <div className="nav-searched-items">
                {
                    data.filter(item => {
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

export default SearchBar;