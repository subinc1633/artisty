import React from 'react';
import UpdateFormContainer from './update_form_container';
import { Link } from 'react-router-dom';
import { IoStar, IoStarOutline, IoThumbsUpSharp } from 'react-icons/io5';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openForm: false
        }

        this.toggleOpen = this.toggleOpen.bind(this);
        this.removeReview = this.removeReview.bind(this);
    }

    removeReview(e) {
        e.preventDefault;
        this.props.deleteReview(this.props.review.itemId, this.props.review.id);
    }

    toggleOpen(e) {
        e.preventDefault;
        if (this.state.openForm) {
            this.setState({ openForm: false });
        } else {
            this.setState({ openForm: true });
        }
    }

    render() {
        const { review, currentUser, reviewers, item } = this.props;
        const reviewer = () => {
            if (reviewers) {
            for (let reviewer of Object.values(reviewers)) {
                if (reviewer.id === review.reviewerId) return reviewer;
            }}
        }

        const date = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const currentDate = date.toLocaleDateString(undefined, options);

        if (reviewer()) {
            return this.state.openForm ? (<UpdateFormContainer toggleOpen={this.toggleOpen} item={item} currentUser={currentUser} content={review.content} review={review} />) : (
                <div className='review-item'>
                    <span className='review-name-date'><Link to={`/users/${reviewer().id}`}>{reviewer().name}</Link> {currentDate}</span>
                    <p className='review-rating'>
                        {
                            [...Array(5)].map((star, idx) => (
                                idx + 1 <= review.rating ? <IoStar key={idx} /> : <IoStarOutline key={idx} />)
                            )
                        }
                    </p>
                    <p className='review-content'>{review.content}</p>
                    <br /><br />
                    <button className='helpful-button'><IoThumbsUpSharp /> Helpful?</button>
                    {currentUser && (currentUser.id === reviewer().id) ?
                        <span>
                            <span className='edit-delete-link' onClick={this.toggleOpen}>Edit</span> | <span className='edit-delete-link' onClick={this.removeReview}>Delete</span>
                        </span> : null}
                </div>
            )
        } else { return null }
    }
};

export default ReviewIndexItem;