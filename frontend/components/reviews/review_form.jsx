import React, { useEffect, useState } from 'react';
import { IoStar, IoStarOutline } from 'react-icons/io5';

const ReviewForm = props => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [content, setContent] = useState(props.content);
    const [openForm, setOpenForm] = useState(true);
    const [state, setState] = useState({});
    
    const handleSubmit = e => {
        e.preventDefault();
        const review = {
            content: content,
            rating: rating,
            reviewer_id: props.currentUser.id,
            item_id: props.itemId
        };
        props.createReview(props.itemId, review)
        .then(() => setState(review));
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
                    defaultValue='Write your review here!'>
                </textarea><br/>
                <button>Submit</button> or <span className='review-form-link' onClick={() => setOpenForm(false)}>Close</span>
            </form>
        </div>
    ) : null;
};

export default ReviewForm;