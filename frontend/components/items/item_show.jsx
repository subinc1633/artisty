import React from 'react';

class ItemShow extends React.Component {
    componentDidMount() {
        this.props.fetchItem(this.props.item.id)
    }

    render() {
        return (
            <div>
                <h1>{this.props.item.title}</h1>
            </div>
        );
    }
}

export default ItemShow;