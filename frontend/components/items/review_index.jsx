import React from 'react';

class ReviewIndex extends React.Component {
    componentDidMount() {
        this.props.fetchReviews();
    }
    
    render() {
        const { reviews, updateReview } = this.props;
        const reviewIndexItems = reviews.map(review => (
            <ReviewIndexItem 
                key={review.id}
                review={review}
                updateReview={updateReview}
            />
        ));
        const noReviews = <h4>There are no reviews for this item.</h4>
        const checkForReview = reviewIndexItems.length === 0 ? noReviews : reviewIndexItems;

        return (
            <div className='review-index'>
                <h1>{reviewIndexItems.length} Reviews</h1>
                <ul>
                    {checkForReview}
                </ul>
            </div>
        );
    }
};

export default ReviewIndex;