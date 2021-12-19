import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryFilter from './category_filter';
import CategoryShowItem from './category_show_item';

const CategoryShow = ({ categoryId, fetchCategory, fetchShops, fetchShop }) => {
    const [category, setCategory] = useState(null);
    const [priceFilter, setPriceFilter] = useState('any');
    const [shopFilter, setShopFilter] = useState('any');
    const [filteredItems, setFilteredItems] = useState(null);
    const location = useLocation();
    
    useEffect(() => {
        fetchCategory(categoryId)
        .then(res => {
            setCategory(res.category);
            setFilteredItems(Object.values(res.category.items));
        });
    }, [location]);

    useEffect(() => {
        if (category) {
            let categoryItems = Object.values(category.items);

            const applyShopFilter = (item) => {
                if (shopFilter === 'any') {
                    return true;
                } else {
                    return item.shopId === parseInt(shopFilter);
                }
            };

            switch (priceFilter) {
                case 'under':
                    setFilteredItems(categoryItems
                        .filter(item => item.price < 15)
                        .filter(item => applyShopFilter(item)));
                    break;
                case 'between':
                    setFilteredItems(categoryItems
                        .filter(item => item.price >= 15 && item.price <= 25)
                        .filter(item => applyShopFilter(item)));
                    break;
                case 'over':
                    setFilteredItems(categoryItems
                        .filter(item => item.price > 25)
                        .filter(item => applyShopFilter(item)));
                    break;
                default:
                    setFilteredItems(categoryItems
                        .filter(item => applyShopFilter(item)));
                    break;
            }
        };
    }, [priceFilter, shopFilter]);
    
    return (
        <div>
            {category ? (
                <div>
                    <div className="category-header">
                        <h1>{category.title}</h1>
                        <div className="category-description">{category.description}</div>
                    </div>

                    <div className="category-show-container">
                        <div className="category-show-filter">
                            <CategoryFilter category={category} changePriceFilter={setPriceFilter} changeShopFilter={setShopFilter} fetchShops={fetchShops} />
                        </div>
                        <div className="item-list-container">
                            <h3 className="item-list-header">Find something you love</h3>
                            
                            { filteredItems && filteredItems.length === 0 ?
                                <div>
                                    <h5>There are no items available.</h5>
                                </div>
                            : filteredItems?
                                <div>
                                    <ul className="category-show-items">
                                        {
                                            filteredItems.map((item, idx) => (
                                                <CategoryShowItem key={idx} item={item} fetchShop={fetchShop} />
                                            ))
                                        }
                                    </ul>
                                </div>
                            : 
                                <div>
                                    <ul className="category-show-items">
                                        {
                                            Object.values(category.items).map((item, idx) => (
                                                <CategoryShowItem key={idx} item={item} fetchShop={fetchShop} />
                                            ))
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            ) : (
                null
            )}
        </div>
    );
}

export default CategoryShow;