import React from 'react';

const CategoryFilter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <div>
                    <b>Price</b>
                    <input type="radio" id="under" name="price" value="under" />
                    <label htmlFor="under">Under $10</label>
                    <input type="radio" id="between" name="price" value="between" />
                    <label htmlFor="between">$10 to $25</label>
                    <input type="radio" id="over" name="price" value="over" />
                    <label htmlFor="over">Over $25</label>
                </div>
                <br/><br/>

                <div>
                    <p>Shop</p>
                    <input type="radio" id="yuzu" name="shop" value="yuzu" />
                    <label htmlFor="yuzu">Yuzuland</label>
                    <input type="radio" id="eggeu" name="shop" value="eggeu" />
                    <label htmlFor="eggeu">Eggeu</label>
                    <input type="radio" id="yh" name="shop" value="yh" />
                    <label htmlFor="yh">YH</label>
                    <input type="radio" id="bean" name="shop" value="bean" />
                    <label htmlFor="bean">8eanie</label>
                </div>
            </form>
        </div>
    )
}

export default CategoryFilter;