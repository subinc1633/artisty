import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: null
        }
    }
    
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
        .then(res => this.setState({ action: res }));
    }
    
    render() {
        const { action } = this.state;
        
        return (
            action ?
            (
                <div>
                    <h1>{action.user.name}</h1>
                    <button>Edit Profile</button><br/>
                    <Link to='/'>Favorite items</Link> <Link to='/'>Favorite shops</Link> <Link to='/'>Create collection</Link>
                </div>
            ) : null
        );
    }
}

export default UserShow;