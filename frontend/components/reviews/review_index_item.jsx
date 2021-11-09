import React from 'react';
import ReviewForm from './review_form';
import { Link } from 'react-router-dom';
import { IoStar, IoStarOutline } from 'react-icons/io5';

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
        const { review, currentUser, reviewers, item } = this.props;
        const reviewer = () => {
            for (const reviewer of reviewers) {
                if (reviewer.id === review.reviewerId) return reviewer
            }
        }
        // debugger
        const reviewedItem = item;

        const date = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const currentDate = date.toLocaleDateString(undefined, options);
        
        return this.state.openForm ? (<ReviewForm reviewedItem={reviewedItem} review={review} />) : (
            <div>
                <Link to={`/users/${reviewer().id}`}>{reviewer().name}</Link> {currentDate}
                <p>
                    {
                        [...Array(5)].map((star, idx) => (
                            idx + 1 <= review.rating ? <IoStar key={idx}/> : <IoStarOutline key={idx}/>)
                        )
                    }
                </p>
                <p>{review.content}</p>

                <p>Purchased item:</p>
                <img className='review-thumbnail' src={`${reviewedItem.photoUrl[0].url}`} /> <Link to={`/items/${reviewedItem.id}`}>{reviewedItem.title}</Link>
                
                <button>Helpful?</button> { currentUser === reviewer ? <span className='edit-link' onClick={this.handleClick}>Edit Review</span> : null}
            </div>
        )
    }
};

export default ReviewIndexItem;