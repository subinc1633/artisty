import React from 'react';
import CategoryIndexItem from './category_index_item';

class CategoryIndex extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }
    
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.categories.map(category => (
                            <CategoryIndexItem
                                key={category.id}
                                category={category}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
};

export default CategoryIndex;