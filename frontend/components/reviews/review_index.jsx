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
        this.props.fetchReviews(this.props.item.id);
    }
    
    render() {
        const { reviews, currentUser, reviewers, item, createReview, updateReview, deleteReview } = this.props;

        const reviewIndexItems = reviews.map((review, idx) => (
            <ReviewIndexItem 
                key={idx}
                review={review}
                reviewers={reviewers}
                item={item}
                currentUser={currentUser}
                updateReview={updateReview}
                deleteReview={deleteReview}
            />
        ));

        const checkOpen = () => {
            if (this.state.openForm) {
                this.state.openForm = false;
                return <ReviewForm createReview={createReview} itemId={item.id} currentUser={currentUser} />
            } else {
                return null;
            }
        };
        
        const noReviews = <h4>There are no reviews for this item.</h4>
        const checkForReview = reviewIndexItems.length === 0 ? noReviews : reviewIndexItems;

        return (
            <div className='review-index'>
                <h1>{reviewIndexItems.length} Reviews</h1>
                { currentUser ? (<button className='create-review-button' onClick={this.openReviewForm}>Create a review</button>) : null }
                {checkOpen()}
                <ul>
                    {checkForReview}
                </ul>
            </div>
        );
    }
};

export default ReviewIndex;