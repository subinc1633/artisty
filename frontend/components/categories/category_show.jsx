import React from 'react';

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
                        <h1 className='page-header'>{action.category.title}</h1>
                        <h2 className='category-description'>{action.category.description}</h2>
                        <h3>Find something you love</h3>
                        
                    </div>
                ) : (
                    null
                )}
            </div>
        );
    }
}

export default CategoryShow;