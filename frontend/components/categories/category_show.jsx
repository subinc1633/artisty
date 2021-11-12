import React from 'react';
import CategoryShowForm from './category_show_form';

class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: null
        }
    }

    componentDidMount() {
        this.props.fetchCategory(this.props.categoryId)
        .then(res => this.setState({ action: res }));
    }

    componentDidUpdate(prevProps) {
        if (this.props.categoryId !== prevProps.categoryId) {
            this.props.fetchCategory(this.props.categoryId)
                .then(res => this.setState({ action: res }));
        }
    }
    
    render() {
        const { action } = this.state;

        return (
            <div>
                { action ? (
                    <div>
                        <div className='category-header'>
                            <h1>{action.category.title}</h1>
                            <div className='category-description'>{action.category.description}</div>
                        </div>
                        
                        <div className='category-show-container'>
                            <div className='category-show-form'>
                                
                            </div>
                            <div>
                                <h3 className='item-list-header'>Find something you love</h3>
                            </div>
                        </div>

                        
                    </div>
                ) : (
                    null
                )}
            </div>
        );
    }
}

export default CategoryShow;