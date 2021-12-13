import React from 'react';
import ReviewIndexItem from './review_index_item';
import CreateFormContainer from './create_form_container';
import { IoStar, IoStarOutline } from 'react-icons/io5';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openForm: false,
            users: this.props.users
        }

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen(e) {
        e.preventDefault();
        if (this.state.openForm) {
            this.props.clearErrors();
            this.setState({ openForm: false });
        } else {
            this.props.clearErrors();
            this.setState({ openForm: true });
        }
    }

    componentDidMount() {
        this.props.fetchUsers()
        .then(users => this.setState(users));
    }

    render() {
        const { reviews, currentUser, item, deleteReview, clearErrors } = this.props;

        const filteredReviews = Object.values(reviews).filter(review => review.itemId === this.props.item.id);

        const reviewIndexItems = [];

        if (filteredReviews) {
            for (let [key, review] of Object.entries(filteredReviews)) {
                reviewIndexItems.unshift(<ReviewIndexItem
                    key={key}
                    review={review}
                    reviewers={this.state.users}
                    item={item}
                    currentUser={currentUser}
                    deleteReview={deleteReview}
                />)
            }
        }

        const checkOpen = () => {
            if (currentUser && this.state.openForm) {
                return <CreateFormContainer content='' toggleOpen={this.toggleOpen} clearErrors={clearErrors} item={item} currentUser={currentUser} />
            } else if (currentUser) {
                return <button className='create-review-button' onClick={this.toggleOpen}>Create a review</button>;
            }
        };

        const ratings = [];
        filteredReviews ? Object.values(filteredReviews).forEach(review => {
            ratings.push(review.rating)
        }) : null;
        const avgRating = item && ratings.length > 0 ? Math.round(ratings.reduce((acc, el) => acc + el, 0) / ratings.length) : 0;

        return (
            <div className='review-index'>
                { reviewIndexItems.length === 1 ?
                    <h3 className='review-total-count'>{reviewIndexItems.length} Review</h3>
                : <h3 className='review-total-count'>{reviewIndexItems.length} Reviews</h3> }
                <span className='review-rating'>
                    {
                        [...Array(5)].map((star, idx) => (
                            idx < avgRating && idx + 1 <= avgRating ? <IoStar key={idx} /> : <IoStarOutline key={idx} />)
                        )
                    }
                </span><br />
                {checkOpen()}
                <hr />
                <ul>
                    {reviewIndexItems.length === 0 ?
                    <h4 className='no-reviews'>There are no reviews for this item.</h4>
                    : reviewIndexItems}
                </ul>
            </div>
        );
    }
};

export default ReviewIndex;