import React from 'react';
import OptionValueItem from './option_value_item';
import ReviewIndexContainer from '../reviews/review_index_container';
import { IoChevronDownSharp } from 'react-icons/io5'

class ItemShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };

        this.toggleDescription = this.toggleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchItem(this.props.itemId);
        this.props.fetchReviews();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createCartItem(this.props.item).then(() => {
            return (
                <p>Item added to cart</p>
            )
        });
    }

    toggleDescription(e) {
        e.preventDefault();
        this.state.active ? this.setState({ active: false }) : this.setState({ active: true });
    }

    render() {
        const { item, reviews } = this.props;

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
                            <div className='item-thumbnail'>
                                <img className='item-image' src={`${item.photoUrl[0].url}`} />
                            </div>
                            <div className='reviews'>
                                <ReviewIndexContainer item={item} reviews={reviews} />
                            </div>
                        </div>
                        <div className='right-item-column'>
                            {item.shop_id}
                            <h1>{item.title}</h1> 
                            <span className='item-show-price'>{currencyFormat.format(item.price)}</span><br/>
                            <form className='request-form' onSubmit={this.handleSubmit}>
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
                            <button className='item-desc-toggler' onClick={this.toggleDescription}>Description <IoChevronDownSharp className='down-arrow' /></button>
                            {this.state.active ? (<div className='item-desc'></div>) : null}
                        </div>
                    </div>
                    
                )}
            </div>
        );
    }
}

export default ItemShow;