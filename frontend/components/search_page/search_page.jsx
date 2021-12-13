import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchItems } from '../../actions/item_actions';
import CategoryShowItem from '../categories/category_show_item';

const SearchPage = () => {
    const items = useSelector(state => state.entities.items);

    let dispatch = useDispatch();
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let query = params.get('q').replace('+', ' ').toLowerCase();

    useEffect(() => {
        dispatch(fetchItems());
    }, []);

    return (
        <div>
            <div className="search-page-container">
                <div className="item-list-container">
                    <h1 className="search-query">You searched for "{query}"</h1>
                    <ul className="category-show-items">
                        {
                            Object.values(items).map((item, idx) => {
                                if (item.title.toLowerCase().includes(query)) return <CategoryShowItem key={idx} item={item} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;