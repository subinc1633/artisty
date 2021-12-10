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
            this.setState({ openForm: false });
        } else {
            this.setState({ openForm: true });
        }
    }

    componentDidMount() {
        this.props.fetchUsers()
        .then(users => this.setState(users));
    }

    render() {
        const { reviews, currentUser, item, deleteReview } = this.props;

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
            if (this.state.openForm) {
                return <CreateFormContainer content='' toggleOpen={this.toggleOpen} item={item} currentUser={currentUser} />
            } else {
                return null;
            }
        };

        const ratings = [];
        filteredReviews ? Object.values(filteredReviews).forEach(review => {
            ratings.push(review.rating)
        }) : null;
        const avgRating = item && ratings.length > 0 ? Math.round(ratings.reduce((acc, el) => acc + el, 0) / ratings.length) : 0;

        return (
            <div className='review-index'>
                <h3 className='review-total-count'>{reviewIndexItems.length} Review(s)</h3>
                <span className='review-rating'>
                    {
                        [...Array(5)].map((star, idx) => (
                            idx + 1 <= avgRating ? <IoStar key={idx} /> : <IoStarOutline key={idx} />)
                        )
                    }
                </span><br />
                {currentUser ? <button className='create-review-button' onClick={this.toggleOpen}>Create a review</button> : null}
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