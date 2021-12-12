import React, { useEffect, useState, useRef } from 'react';
import CategoryFilter from './category_filter';
import CategoryShowItem from './category_show_item';

const CategoryShow = ({ categoryId, fetchCategory }) => {
    const [category, setCategory] = useState(null);
    const [itemShop, setItemShop] = useState(null);
    const [filter, setFilter] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    
    useEffect(() => {
        fetchCategory(categoryId)
        .then(res => setCategory(res.category));
    }, []);

    useEffect(() => {
        if (category && filter && itemShop) {
            let categoryItems = Object.values(category.items);
            switch (filter) {
                case 'any':
                    setFilteredItems(categoryItems);
                    break;
                case 'under':
                    setFilteredItems(categoryItems.filter(item => item.price < 15));
                    break;
                case 'between':
                    setFilteredItems(categoryItems.filter(item => item.price > 15 && item.price <= 25));
                    break;
                case 'over':
                    setFilteredItems(categoryItems.filter(item => item.price > 25));
                    break;
                case 'yuzu':
                case 'eggeu':
                case 'yh':
                case 'bean':
                    setFilteredItems(categoryItems.filter(item => item.shopId === itemShop.id));
                    break;
                default:
                    break;
            }
        };
    }, [filter]);
    
    
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
                            <CategoryFilter category={category} changeFilter={setFilter} />
                        </div>
                        <div className="item-list-container">
                            <h3 className="item-list-header">Find something you love</h3>
                            { filteredItems ?
                            <div>
                                <ul className="category-show-items">
                                    {
                                        filteredItems.map((item, idx) => (
                                            <CategoryShowItem key={idx} item={item} changeItemShop={setItemShop} />
                                        ))
                                    }
                                </ul>
                            </div>
                            : 
                            <div>
                                <ul className="category-show-items">
                                    {
                                        Object.values(category.items).map((item, idx) => (
                                            <CategoryShowItem key={idx} item={item} />
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