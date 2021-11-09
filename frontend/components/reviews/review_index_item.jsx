import React from 'react';
import ReviewForm from './review_form';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openForm: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ openForm: true });
    }
    
    render() {
        const { review, currentUser, users, items } = this.props;
        const reviewer = users[review.reviewerId];
        const reviewedItem = items[review.itemId];

        const date = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const currentDate = date.toLocaleDateString(undefined, options);
        
        return this.state.openForm ? (<ReviewForm />) : (
            <div>
                <Link to=''>{reviewer}</Link> {currentDate}
                <p>{review.rating}</p>
                <p>{review.content}</p>

                <p>Purchased item:</p>
                <img className='review-thumbnail' src={`${reviewedItem.photoUrl[0].url}`} /> <Link to={`/items/${reviewedItem.id}`}>{reviewedItem.title}</Link>
                
                <button>Helpful?</button> { currentUser === reviewer ? <span className='edit-link' onClick={this.handleClick}>Edit Review</span> : null}
            </div>
        )
    }
};

export default ReviewIndexItem;