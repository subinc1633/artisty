import React from 'react';
import { IoStar, IoStarOutline } from 'react-icons/io';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    update(field) {

    }
    
    render() {
        return (
            <div>
                <form className='review-form'>
                    <label htmlFor='rating'>Rating</label>
                    <input type='radio' name='one' id='rating' />
                    <input type='radio' name='two' id='rating' />
                    <input type='radio' name='three' id='rating' />
                    <input type='radio' name='four' id='rating' />
                    <input type='radio' name='five' id='rating' />

                    <label>
                        <input type='text' placeholder='Write your review here!' />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm;