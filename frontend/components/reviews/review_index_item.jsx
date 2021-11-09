import React from 'react';
import ReviewForm from './review_form';
import { Link } from 'react-router-dom';
import { IoStar, IoStarOutline, IoThumbsUpSharp } from 'react-icons/io5';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openForm: false
        }

        this.updateReview = this.updateReview.bind(this);
        this.removeReview = this.removeReview.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers;
    }

    removeReview(e) {
        e.preventDefault;
        this.props.deleteReview(this.props.item.id, this.props.review.id);
    }

    updateReview(e) {
        e.preventDefault();
        this.setState({ openForm: true });
        this.props.updateReview(this.props.item.id, this.props.review.id);
    }
    
    render() {
        const { review, currentUser, reviewers, item} = this.props;
        const reviewer = () => {
            for (const reviewer of reviewers) {
                if (reviewer.id === review.reviewerId) return reviewer;
            }
        }

        const reviewedItem = item;

        const date = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const currentDate = date.toLocaleDateString(undefined, options);
        
        if (reviewer()) {
            return this.state.openForm ? (<ReviewForm content={review.content} reviewedItem={reviewedItem} review={review} />) : (
            <div className='review-item'>
                <Link to={`/users/${reviewer().id}`}>{reviewer().name}</Link> {currentDate}
                <p className='review-rating'>
                    {
                        [...Array(5)].map((star, idx) => (
                            idx + 1 <= review.rating ? <IoStar key={idx}/> : <IoStarOutline key={idx}/>)
                        )
                    }
                </p>
                <p className='review-content'>{review.content}</p>
                <br/>
                <p>Purchased item:</p>
                <img className='review-thumbnail' src={`${reviewedItem.photoUrl[0].url}`} /> <Link to={`/items/${reviewedItem.id}`}>{reviewedItem.title}</Link>
                <br/>
                    <button className='helpful-button'><IoThumbsUpSharp/> Helpful?</button>
                    {currentUser === reviewer() ?
                        <p>
                            <span className='edit-delete-link' onClick={this.updateReview}>Edit</span> | 
                            <span className='edit-delete-link' onClick={this.removeReview}>Delete</span>
                        </p> : null }
            </div>
        )} else { return null }
    }
};

export default ReviewIndexItem;