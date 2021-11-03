import React from 'react';

class ItemShow extends React.Component {
    render() {
        return (
            <input
                type="file"
                onChange={e => this.setState({ photos: e.target.files })}
                multiple
            />
        )
    }
}

export default ItemShow;