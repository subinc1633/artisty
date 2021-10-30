import React from 'react';

// function Welcome() {
//     const []
// }

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }

        this.toggleActive = this.toggleActive.bind(this);
    }
    
    toggleActive() {
        this.setState({isActive: !this.state.isActive});
    }

    render() {
        const loggedIn = (
            <div>
                <h1>Welcome, {this.props.currentUser}!</h1>
                <button onClick={this.props.logout}></button>
            </div>
        );

        const loggedOut = (
            <nav>
                <button className={this.state.isActive ? 'active_modal' : null} onClick={this.toggleActive}>Login</button>
            </nav>
        );

        return (
            this.props.currentUser ? loggedIn : loggedOut
        )
    }
};

export default Welcome;