import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const currentUser = Object.assign({}, this.state);
        const process = user => this.props.processForm(user);
        const demoUser = Object.assign({}, {
            email: 'peperoroll@gmail.com',
            password: 'peppero',
            name: 'Soybean'
        });

        if (currentUser.email) {
            return process(currentUser);
        } else {
            return process(demoUser)
        }
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const signingUp = () => {
            if (this.props.formType === 'Sign up') {
                return (
                <label>Name<br />
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.update('name')} />
                    <br />
                </label>
            )}
        };

        return (
            <div>
                <Link to="/signup" onClick={this.props.clearErrors}><button>Sign up</button></Link><br/>
                <button onClick={this.handleSubmit}>Demo User</button>
                <h2>{this.props.formType}</h2>
                { this.renderErrors() }
                <form onSubmit={this.handleSubmit}>
                    <label>Email<br/>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label><br/>
                    { signingUp() }
                    <label>Password<br/>
                        <input
                            type="password"
                            value={this.state.password} 
                            onChange={this.update('password')} />
                    </label><br/><br/>
                    <button>{this.props.formType}</button>
                </form>
            </div>
        );
    }
};

export default SessionForm;