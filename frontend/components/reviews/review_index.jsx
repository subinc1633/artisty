import React from 'react';
import ReviewIndexItem from './review_index_item';
import ReviewForm from './review_form';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openForm: false,
            avgRating: 0
        }

        this.openReviewForm = this.openReviewForm.bind(this);
    }

    openReviewForm(e) {
        e.preventDefault();
        this.setState({ openForm: true });

    }

    componentDidMount() {
        this.props.fetchReviews();
    }
    
    render() {
        const { reviews, items, users, currentUser, updateReview } = this.props;
        
        const reviewIndexItems = () => {
            if (reviews) {
                return reviews.map(review => (
                    <ReviewIndexItem 
                        key={review.id}
                        review={review}
                        items={items}
                        users={users}
                        currentUser={currentUser}
                        updateReview={updateReview}
                    />
                )); } else {
                return null;
            }
        }
        const noReviews = <h4>There are no reviews for this item.</h4>
        const checkForReview = reviewIndexItems.length === 0 ? noReviews : reviewIndexItems;

        return (
            <div className='review-index'>
                <h1>{reviewIndexItems.length} Reviews</h1>
                { currentUser ? (<button className='create-review-button' onClick={this.openReviewForm}>Create a review</button>) : null }
                { this.state.openForm ? (<ReviewForm />) : null }
                <ul>
                    {checkForReview}
                </ul>
            </div>
        );
    }
};

export default ReviewIndex;