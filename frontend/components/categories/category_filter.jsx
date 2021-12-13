import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const CategoryFilter = ({ category, changeFilter, changeShopFilter, fetchShops }) => {
    const [shops, setShops] = useState(null);
    const [firstCheck, setFirstCheck] = useState('any');
    const [secondCheck, setSecondCheck] = useState('any');
    
    useEffect(() => {
        fetchShops()
        .then(res => setShops(Object.values(res.shops)));
    }, [])
    
    const handlePriceChange = (e) => {
        setFirstCheck(e.target.value);
        changeFilter(e.target.value);
    }

    const handleShopChange = (e) => {
        setSecondCheck(e.target.value);
    }

    return (
        <div className="category-filter-container">
            <Link to="/categories" className="category-link"><span><IoArrowBack /></span> All Categories</Link>
            <Link to={`/categories/${category.id}`} className="indent category-link"><p><b>{category.title}</b></p></Link>
            <br/>
            <form className="category-filter-form">
                <div>
                    <p><b className="filter-title">Price</b></p>
                    <input type="radio" id="any" name="price" value="any" onChange={handlePriceChange} checked={firstCheck === 'any'} />
                    <label htmlFor="any">Any price</label><br/>
                    <input type="radio" id="under" name="price" value="under" onChange={handlePriceChange} checked={firstCheck === 'under'} />
                    <label htmlFor="under">Under $15</label><br/>
                    <input type="radio" id="between" name="price" value="between" onChange={handlePriceChange} checked={firstCheck === 'between'} />
                    <label htmlFor="between">$15 to $25</label><br/>
                    <input type="radio" id="over" name="price" value="over" onChange={handlePriceChange} checked={firstCheck === 'over'} />
                    <label htmlFor="over">Over $25</label>
                </div>

                <div>
                    <p><b className="filter-title">Shop</b></p>
                    <input type="radio" id="all-shops" name="shop" value="any" onChange={handleShopChange} checked={secondCheck === 'any'} />
                    <label htmlFor="all-shops">All shops</label><br/>
                    {
                        shops ? shops.map(shop => (
                            <li key={shop.id} className="hide-bullets">
                                <input type="radio" id={shop.id} name="shop" value={shop.id} onChange={handleShopChange} checked={parseInt(secondCheck) === shop.id} />
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