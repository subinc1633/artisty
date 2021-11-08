import React from 'react';
import CategorySplashItem from './category_splash_item';

class CategorySplash extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }
    
    render() {
        return (
            <div>
                <ul className='category-splash-container'>
                    {
                        this.props.categories.map((category, idx) => (
                            <CategorySplashItem
                                key={idx}
                                category={category}
                                url={category.photoUrl[0].url}
                            />)
                        )
                    }
                </ul>
            </div>
        )
    }
};

export default CategorySplash;