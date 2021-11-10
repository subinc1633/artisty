import React from 'react';
import OptionValueItem from './option_value_item';
import Carousel from './carousel';
import ReviewIndexContainer from '../reviews/review_index_container';

class ItemShow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchItem(this.props.itemId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.props.fetchItem(this.props.itemId);
        }
    }

    render() {
        const { item } = this.props;

        const currencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });


        return (
            <div className='item-show-container'>
                { !item ? null :
                (
                    <div className='item-show-page'>
                        <div className='left-item-column'>
                            {/* <Carousel key={item.id} item={item} /> */}
                            <div className='item-thumbnail'>
                                {/* {
                                    item.photoUrl.map((photo, idx) => (
                                        <img className='item-image' key={idx} src={`${photo.url}`} />
                                    ))
                                } */}
                                <img className='item-image' src={`${item.photoUrl[0].url}`} />
                            </div>
                            <div className='reviews'>
                                <ReviewIndexContainer item={item} reviews={item.reviews} />
                            </div>
                        </div>
                        <div className='right-item-column'>
                            {item.shop_id}
                            <h1>{item.title}</h1> 
                            <p className='item-show-price'>{currencyFormat.format(item.price)}</p>
                            <form>
                                { item.options ? 
                                    Object.entries(item.options).map(([key, val], idx) => (
                                    <label key={idx}>{key}<br/>
                                        <select className='item-select' name={key}>
                                            <option value='Select an option'>Select an option</option>
                                            <OptionValueItem val={val} />
                                        </select>
                                    </label>))
                                    : null
                                }<br/>
                                <label>Quantity<br/>
                                    <select className='' name='quantity'>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                        <option value='7'>7</option>
                                        <option value='8'>8</option>
                                        <option value='9'>9</option>
                                        <option value='10'>10</option>
                                    </select>
                                </label>
                                <br/><br/>
                                <button>Add to cart</button><br/>
                            </form>
                            <button>Description</button><br/>
                            {item.description}
                        </div>
                    </div>
                    
                )}
            </div>
        );
    }
}

export default ItemShow;