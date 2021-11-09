import React, { useState } from 'react';
import { IoStar, IoStarOutline } from 'react-icons/io5';

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div>
            <form className='review-form'>
                <label>Choose a star rating:</label>
                {
                    [...Array(5)].map((star, idx) => {
                        const ratingValue = idx + 1
                        return (
                            // <button
                            //     key={idx}
                            //     className='review-star-button'
                            //     onClick={() => this.setState({ rating: idx })}
                            //     onMouseEnter={() => this.setState({ hover: idx })}
                            //     onMouseLeave={() => this.setState({ hover: this.state.rating })}
                            // >
                            //     { (this.state.hover || this.state.rating) >= idx ? <span className='filled-star'><IoStar/></span> : <span className='empty-star'><IoStarOutline/></span> }
                            // </button>
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
                    )})
                }<br/><br/>
                <label>
                    <textarea className='content'>Write your review here!</textarea>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default ReviewForm;