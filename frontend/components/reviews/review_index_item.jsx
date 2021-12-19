import React from 'react';
import UpdateFormContainer from './update_form_container';
import { Link } from 'react-router-dom';
import { IoStar, IoStarOutline, IoThumbsUpSharp } from 'react-icons/io5';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openForm: false,
            counter: 0
        }

        this.toggleOpen = this.toggleOpen.bind(this);
        this.removeReview = this.removeReview.bind(this);
        this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
    }

    removeReview(e) {
        e.preventDefault;
        this.props.deleteReview(this.props.review.id);
    }

    toggleOpen(e) {
        e.preventDefault;
        if (this.state.openForm) {
            this.props.clearErrors();
            this.setState({ openForm: false });
        } else {
            this.props.clearErrors();
            this.setState({ openForm: true });
        }
    }

    handleHelpfulClick() {
        this.setState({counter: this.state.counter += 1});
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
                <div className="review-item">
                    <span className="review-name-date"><Link className="reviewer-name" to={`/users/${reviewer().id}`}>{reviewer().name}</Link> {currentDate}</span>
                    <p className="review-rating">
                        {
                            [...Array(5)].map((star, idx) => (
                                idx + 1 <= review.rating ? <IoStar key={idx} /> : <IoStarOutline key={idx} />)
                            )
                        }
                    </p>
                    <p className="review-content">{review.content}</p>
                    <br /><br />
                    { this.state.counter === 0 ? <button className="helpful-button" onClick={this.handleHelpfulClick}><IoThumbsUpSharp /> Helpful?</button>
                    : <button className="helpful-button" onClick={this.handleHelpfulClick}><IoThumbsUpSharp /> {this.state.counter} Helpful</button> }
                    {currentUser && (currentUser.id === reviewer().id) ?
                        <span>
                            <span className="edit-delete-link" onClick={this.toggleOpen}>Edit</span> | <span className="edit-delete-link" onClick={this.removeReview}>Delete</span>
                        </span> : null}
                </div>
            )
        } else { return null }
    }
};

export default ReviewIndexItem;