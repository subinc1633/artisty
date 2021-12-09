import React from 'react';
import CategoryFilter from './category_filter';
import CategoryShowItem from './category_show_item';
import { IoArrowBack } from 'react-icons/io5';

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
                {action ? (
                    <div>
                        <div className="category-header">
                            <h1>{action.category.title}</h1>
                            <div className="category-description">{action.category.description}</div>
                        </div>

                        <div className="category-show-container">
                            <div className="category-show-form">
                                <p><span><IoArrowBack /></span> All Categories</p>
                                <p>{action.category.title}</p>
                                <CategoryFilter />
                            </div>
                            <div className="item-list-container">
                                <h3 className="item-list-header">Find something you love</h3>
                                <div>
                                    <ul className="category-show-items">
                                        {
                                            Object.values(action.category.items).map((item, idx) => (
                                                <CategoryShowItem key={idx} item={item} />
                                            ))
                                        }
                                    </ul>
                                </div>
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