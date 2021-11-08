import React from 'react';
import OptionValueItem from './option_value_item';
import Carousel from './carousel';

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
            <div>
                { !item ? null :
                (
                    <div className='item-show-page'>
                        <div className='left-item-column'>
                            {/* <Carousel key={item.id} item={item} /> */}
                            <div className='item-thumbnail'>
                                {
                                    item.photoUrl.map((photo, idx) => (
                                        <img className='item-image' key={idx} src={`${photo.url}`} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className='right-item-column'>
                            {item.shop_id}
                            <h1>{item.title}</h1> 
                            <p>{currencyFormat.format(item.price)}</p>
                            { item.options ? 
                                Object.entries(item.options).map(([key, val], idx) => (
                                <p key={idx}>{key}
                                    <select className='' name={key}>
                                        <OptionValueItem val={val} />
                                    </select>
                                </p>))
                                : null
                            }
                            <p>Quantity
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
                            </p>
                            <button>Add to cart</button><br/>
                            Description<br/>
                            {item.description}
                        </div>
                    </div>
                    
                )}
            </div>
        );
    }
}

export default ItemShow;