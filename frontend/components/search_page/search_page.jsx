import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchItems } from '../../actions/item_actions';
import CategoryShowItem from '../categories/category_show_item';

const SearchPage = () => {
    const [items, setItems] = useState({});

    let dispatch = useDispatch();
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let query = params.get('q').replace('+', ' ');

    useEffect(() => {
        dispatch(fetchItems());
    }, [items]);

    return (
        <div>
            <p>You searched for {query}</p>
            {
                Object.values(items).map(item => {
                    console.log(item)
                    item.title.includes(query) ? <p>{item.title}</p> : null
                })
            }
        </div>
    );
}

export default SearchPage;