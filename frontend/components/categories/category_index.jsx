import React from 'react';
import CategoryIndexItem from './category_index_item';

class CategoryIndex extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }
    
    render() {
        return (
            <div>
                <div className='category-header'>
                    All Categories
                </div>
                <div className='category-index-categories'>
                    <ul>
                        {
                            this.props.categories.map((category, idx) => (
                                <CategoryIndexItem key={idx} category={category} />
                            ))
                        }
                    </ul>
                </div>
                <div className='category-index-fanart'>
                    {/* <h1>Fanart</h1> */}
                </div>
                <div className='category-content'>
                </div>
            </div>
        )
    }
};

export default CategoryIndex;