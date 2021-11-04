import React from 'react';
import { SingleItem } from './single_item';

class ItemIndex extends React.Component {
    componentDidMount() {
        this.props.fetchItems();
    }
    
    render() {
        const { items } = this.props;

        return (
            <div>
                <ul>
                    {
                        items.map(item => {
                            return (
                                <SingleItem
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ItemIndex;