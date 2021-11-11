import React, { useState, useEffect } from 'react';
import UpdateFormContainer from './update_form_container';
import { Link } from 'react-router-dom';
import { IoStar, IoStarOutline, IoThumbsUpSharp } from 'react-icons/io5';

const ReviewIndexItem = props => {
    const { review, currentUser, users, item, toggleOpen, deleteReview } = props;
    const [openForm, setOpenForm] = useState(false);

    const removeReview = (e) => {
        e.preventDefault;
        deleteReview(review.itemId, review.id);
    }
    
    const reviewer = () => {
        for (const [key, user] of Object.entries(users)) {
            if (user.id === review.reviewerId) return user;
        }
    }

    const date = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const currentDate = date.toLocaleDateString(undefined, options);
    
    if (reviewer()) {
        return openForm ? (<UpdateFormContainer toggleOpen={toggleOpen} item={item} currentUser={currentUser} content={review.content} review={review} />) : (
        <div className='review-item'>
            <span className='review-name-date'><Link to={`/users/${reviewer().id}`}>{reviewer().name}</Link> {currentDate}</span>
            <p className='review-rating'>
                {
                    [...Array(5)].map((star, idx) => (
                        idx + 1 <= review.rating ? <IoStar key={idx}/> : <IoStarOutline key={idx}/>)
                    )
                }
            </p>
            <p className='review-content'>{review.content}</p>
            <br/><br/>
                <button className='helpful-button'><IoThumbsUpSharp/> Helpful?</button>
                {currentUser === reviewer() ?
                    <span>
                        <span className='edit-delete-link' onClick={(e) => toggleOpen(e)}>Edit</span> | <span className='edit-delete-link' onClick={(e) => removeReview(e)}>Delete</span>
                    </span> : null }
        </div>
    )} else { return null }
};

export default ReviewIndexItem;