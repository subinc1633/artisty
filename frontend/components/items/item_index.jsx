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
                            // const img = item.photoUrl[0];
                            return (
                                <SingleItem
                                    // key={img.id}
                                    key={item.id}
                                    item={item}
                                    // url={img.url}
                                    // filename={img.filename}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ItemIndex;