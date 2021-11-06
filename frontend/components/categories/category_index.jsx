import React from 'react';

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
                            <CategoryShow
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