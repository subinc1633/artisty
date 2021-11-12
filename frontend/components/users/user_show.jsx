import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';

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
                <div id='user-profile'>
                    <h1 className='user-header'>{action.user.name}</h1><button className='edit-profile'><FaPencilAlt /> Edit Profile</button><br/>
                    <span className='favorites'>
                        <Link to='/'><button className='favorite-items'>Favorite items</button></Link>
                        <Link to='/'><button className='favorite-shops'>Favorite shops</button></Link>
                        <Link to='/'><button className='create-collection'>Create collection</button></Link>
                    </span>
                </div>
            ) : null
        );
    }
}

export default UserShow;