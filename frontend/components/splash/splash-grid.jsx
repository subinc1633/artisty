import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SplashGrid = ({ fetchItems }) => {
    const [items, setItems] = useState(null);
    const splashGridItems = [];
    
    useEffect(() => {
        fetchItems().then(res => setItems(Object.values(res.items)));
    }, []);

    if (items) {
        splashGridItems.push(items[11], items[16], items[5], items[9], items[2], items[8], items[22], items[10]);

        return (
            <div className="splash-img-grid">
                {
                    splashGridItems.map((item, idx) => (
                        <Link key={item.id} to={`/items/${item.id}`} className={`grid-item-${idx + 1}`}>
                            <img src={item.photoUrl[0].url} alt={item.title} />
                            <p className='splash-item-price-container'>
                                <span className='splash-item-price'>${(item.price * 100 / 100).toFixed(2)}</span>
                            </p>
                        </Link>
                    ))
                }

                {/* <Link to="/items/12"><img src={items[11].photoUrl[0].url} className="grid-item-1" /></Link>
                <Link to="/items/17"><img src={items[16].photoUrl[0].url} className="grid-item-2" /></Link>
                <Link to="/items/6"><img src={items[5].photoUrl[0].url} className="grid-item-3" /></Link>
                <Link to="/items/10"><img src={items[9].photoUrl[0].url} className="grid-item-4" /></Link>
                <Link to="/items/3"><img src={items[2].photoUrl[0].url} className="grid-item-5" /></Link>
                <Link to="/items/9"><img src={items[8].photoUrl[0].url} className="grid-item-6" /></Link>
                <Link to="/items/23"><img src={items[22].photoUrl[0].url} className="grid-item-7" /></Link>
                <Link to="/items/11"><img src={items[10].photoUrl[0].url} className="grid-item-8" /></Link> */}
            </div>
        )
    } else { return null; }
};

export default SplashGrid;