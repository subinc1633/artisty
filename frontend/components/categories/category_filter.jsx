import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const CategoryFilter = ({ category, changeFilter, fetchShops }) => {
    const [shops, setShops] = useState(null);
    
    useEffect(() => {
        fetchShops()
        .then(res => setShops(Object.values(res.shops)));
    }, [])
    
    const handleClick = (e) => {
        changeFilter(e.target.value);
    }

    return (
        <div className="category-filter-container">
            <Link to="/categories" className="category-link"><span><IoArrowBack /></span> All Categories</Link>
            <Link to={`/categories/${category.id}`} className="indent category-link"><p><b>{category.title}</b></p></Link>
            <br/>
            <form className="category-filter-form">
                <div>
                    <p><b className="filter-title">Price</b></p>
                    <input type="radio" id="any" name="price" value="any" onClick={handleClick} />
                    <label htmlFor="any">Any price</label><br/>
                    <input type="radio" id="under" name="price" value="under" onClick={handleClick} />
                    <label htmlFor="under">Under $15</label><br/>
                    <input type="radio" id="between" name="price" value="between" onClick={handleClick} />
                    <label htmlFor="between">$15 to $25</label><br/>
                    <input type="radio" id="over" name="price" value="over" onClick={handleClick} />
                    <label htmlFor="over">Over $25</label>
                </div>

                <div>
                    <p><b className="filter-title">Shop</b></p>
                    {
                        shops ? shops.map(shop => (
                            <li key={shop.id} className="hide-bullets">
                                <input type="radio" id={shop.id} name="shop" value={shop.id} onClick={handleClick} />
                                <label htmlFor={shop.id}>{shop.igHandle}</label><br/>
                            </li>
                        )) : null
                    }
                </div>
            </form>
        </div>
    )
}

export default CategoryFilter;