import React from 'react';
import { Link } from 'react-router-dom';
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
                                <Link to={`/categories/${category.id}`} key={idx}><CategoryIndexItem category={category} /></Link>
                            ))
                        }
                    </ul>
                </div>
                <div className='category-index-fanart'>
                    
                </div>
                <div className='category-content'>
                </div>
            </div>
        )
    }
};

export default CategoryIndex;