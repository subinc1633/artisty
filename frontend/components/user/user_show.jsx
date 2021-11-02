import React from 'react';

class UserShow extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.user.id)
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <button>Edit Profile</button><br/>
                <Link>Favorite items</Link> <Link>Favorite shops</Link> <Link>Create collection</Link>
            </div>
        );
    }
}

export default UserShow;