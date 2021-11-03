import React from 'react';
import { SingleItem } from './single_item';

class ItemIndex extends React.Component {
    componentDidMount() {
        this.props.fetchItems();
    }
    
    render() {
        const { items } = this.props;
        items.forEach(item => {
            console.log(item)
        })

        return (
            <div>
                <ul>
                    {
                        items.map(item => (
                            <SingleItem
                                key={item.id}
                                item={item}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default ItemIndex;