import React, { useState, useEffect } from 'react';
import ReviewIndexItem from './review_index_item';
import CreateFormContainer from './create_form_container';
import { IoStar, IoStarOutline } from 'react-icons/io5';

const ReviewIndex = props => {
    let [openForm, setOpenForm] = useState(false);
    const [users, setUsers] = useState(props.users);
    
    const toggleOpen = (e) => {
        e.preventDefault();
        if (openForm) {
            return setOpenForm(false);
        } else {
            return setOpenForm(true);
        }
    }

    useEffect(() => {
        props.fetchUsers();
    }, [setUsers]);

    const reviewIndexItems = [];
        
    if (props.reviews) {
        for (let [key, review] of Object.entries(props.reviews)) {
            reviewIndexItems.unshift(
                <ReviewIndexItem
                    key={key}
                    review={review}
                    users={props.users}
                    toggleOpen={toggleOpen}
                    item={props.item}
                    currentUser={props.currentUser}
                    deleteReview={props.deleteReview}
                />
            )
        }
    }

    const checkOpen = () => {
        if (openForm) {
            return <CreateFormContainer toggleOpen={toggleOpen} item={props.item} currentUser={props.currentUser} />
        } else {
            return null;
        }
    };

    const ratings = []
    props.reviews ? Object.values(props.reviews).forEach(review => {
        ratings.push(review.rating)
    }) : null;
    const avgRating = props.item && ratings.length > 0 ? Math.round(ratings.reduce((acc, el) => acc + el, 0) / ratings.length) : 0;

    return (
        <div className='review-index'>
            <h3 className='review-total-count'>{reviewIndexItems.length} Reviews</h3>
            <span className='review-rating'>
                {
                    [...Array(5)].map((star, idx) => (
                        idx + 1 <= avgRating ? <IoStar key={idx} /> : <IoStarOutline key={idx} />)
                    )
                }
            </span><br/>
            {props.currentUser && props.item ? <button className='create-review-button' onClick={toggleOpen}>Create a review</button> : null}
            {checkOpen()}
            <hr/>
            <ul>
                { 
                    reviewIndexItems.length === 0 ?
                        <li><h4 className='no-reviews'>There are no reviews for this item.</h4></li>
                    : reviewIndexItems
                }
            </ul>
        </div>
    );
};

export default ReviewIndex;