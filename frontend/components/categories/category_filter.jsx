import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const CategoryFilter = ({ category, changeFilter }) => {
    const handleClick = (e) => {
        e.preventDefault();
        changeFilter(e.target.value);
    }

    return (
        <div className="category-filter-container">
            <Link to="/categories" className="category-link"><span><IoArrowBack /></span> All Categories</Link>
            <Link to={`/categories/${category.id}`} className="indent category-link"><p><b>{category.title}</b></p></Link>
            <form onClick={handleClick}>
                <div>
                    <b>Price</b><br/>
                    <input type="radio" id="any" name="price" value="any" />
                    <label htmlFor="any">Any price</label><br/>
                    <input type="radio" id="under" name="price" value="under" />
                    <label htmlFor="under">Under $15</label><br/>
                    <input type="radio" id="between" name="price" value="between" />
                    <label htmlFor="between">$15 to $25</label><br/>
                    <input type="radio" id="over" name="price" value="over" />
                    <label htmlFor="over">Over $25</label>
                </div>

                <div>
                    <b>Shop</b><br/>
                    <input type="radio" id="yuzu" name="shop" value="yuzu" />
                    <label htmlFor="yuzu">Yuzuland</label><br/>
                    <input type="radio" id="eggeu" name="shop" value="eggeu" />
                    <label htmlFor="eggeu">Eggeu</label><br/>
                    <input type="radio" id="yh" name="shop" value="yh" />
                    <label htmlFor="yh">YH</label><br/>
                    <input type="radio" id="bean" name="shop" value="bean" />
                    <label htmlFor="bean">8eanie</label>
                </div>
            </form>
        </div>
    )
}

export default CategoryFilter;