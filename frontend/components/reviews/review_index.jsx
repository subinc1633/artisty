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

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen(e) {
        e.preventDefault();
        if (this.state.openForm) {
            this.setState({ openForm: false });
        } else {
            this.setState({ openForm: true });
        }
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.item.id);
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps) {
        if (this.props.item.reviews !== prevProps.item.reviews) {
            this.props.fetchReviews(this.props.item.id);
        }
    }
    
    render() {
        const { reviews, currentUser, reviewers, item, errors, fetchReviews, createReview, updateReview, deleteReview } = this.props;

        const reviewIndexItems = [];
        
        reviews ? reviews.forEach((review, idx) => (
            reviewIndexItems.unshift(<ReviewIndexItem 
                key={idx}
                review={review}
                reviewers={reviewers}
                fetchReviews={fetchReviews}
                item={item}
                currentUser={currentUser}
                updateReview={updateReview}
                deleteReview={deleteReview}
            />)
        )) : null;

        const checkOpen = () => {
            if (this.state.openForm) {
                return <ReviewForm
                    fetchReviews={fetchReviews} 
                    createReview={createReview}
                    itemId={item.id}
                    content=''
                    currentUser={currentUser}
                    errors={errors}
                    onChange={this.toggleOpen}
                />
            } else {
                return null;
            }
        };
        
        const noReviews = <h4>There are no reviews for this item.</h4>
        const checkForReview = reviewIndexItems.length === 0 ? noReviews : reviewIndexItems;

        return (
            <div className='review-index'>
                <h1>{reviewIndexItems.length} Reviews</h1>
                {currentUser ? <button className='create-review-button' onClick={this.toggleOpen}>Create a review</button> : null}
                {checkOpen()}
                <ul>
                    {checkForReview}
                </ul>
            </div>
        );
    }
};

export default ReviewIndex;