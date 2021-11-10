import React, { useEffect, useState } from 'react';
import { IoStar, IoStarOutline } from 'react-icons/io5';

const ReviewForm = props => {
    const [rating, setRating] = useState(props.rating);
    const [hover, setHover] = useState(0);
    const [content, setContent] = useState(props.content);
    const [openForm, setOpenForm] = useState(true);
    const [state, setState] = useState(props.review);
    
    const handleSubmit = e => {
        e.preventDefault();
        const review = {
            content: content,
            rating: rating,
            reviewer_id: props.currentUser.id,
            item_id: props.item.id
        };

        console.log(props.review)

        const updatedReview = {
            id: props.review.id,
            content: content,
            rating: rating,
            reviewer_id: props.currentUser.id,
            item_id: props.item.id
        };

        if (props.formType === 'Create') {
            props.createReview(props.item.id, review)
            .then(() => setState(review));
        } else if (props.formType === 'Update') {
            props.updateReview(props.item.id, updatedReview)
            .then(() => setState(updatedReview));
        }
        
        setOpenForm(false);
    }

    const updateContent = () => {
        return e => setContent(e.currentTarget.value);
    }

    const renderErrors = () => {
        return (
            props.errors ? (
                <ul className='form-errors'>
                    {props.errors.map((error, i) => (
                        <li key={`${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            ) : null
        )
    }

    return openForm ? (
        <div>
            <form className='review-form' onSubmit={(e) => handleSubmit(e)}>
                {renderErrors()}
                <label>Choose a star rating:</label><br/>
                {
                    [...Array(5)].map((star, idx) => {
                        const ratingValue = idx + 1
                        return (
                            <label key={idx}>
                                <input
                                    type='radio'
                                    name='rating'
                                    value={ratingValue}
                                    onClick={() => setRating(ratingValue)}
                                     />
                                {ratingValue <= (hover || rating) ?
                                    <IoStar className='star' onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(0)} />
                                : <IoStarOutline className='star' onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(0)} />}
                            </label>
                        );
                    })
                }<br/><br/>
                <textarea
                    className='content'
                    rows='10'
                    cols='60'
                    onChange={updateContent()}
                    defaultValue={content}>
                </textarea><br/>
                <button>Submit</button> or <span className='review-form-link' onClick={() => setOpenForm(false)}>Close</span>
            </form>
        </div>
    ) : null;
};

export default ReviewForm;