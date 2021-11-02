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
        this.loginDemo = this.loginDemo.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const currentUser = Object.assign({}, this.state);
        return this.props.processForm(currentUser);
    }

    loginDemo(e) {
        e.preventDefault();
        const demoUser = Object.assign({}, {
            email: 'peperoroll@gmail.com',
            password: 'peppero'
        });
        return this.props.processForm(demoUser);
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
                        type='text'
                        value={this.state.name}
                        onChange={this.update('name')} />
                    <br />
                </label>
            )}
        };

        return (
            <div>
                <Link to="/signup" onClick={this.props.clearErrors}><button>Sign up</button></Link><br/>
                <button onClick={this.loginDemo}>Demo User</button>
                <h2>{this.props.formType}</h2>
                { this.renderErrors() }
                <form onSubmit={this.handleSubmit}>
                    <label>Email<br/>
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label><br/>
                    { signingUp() }
                    <label>Password<br/>
                        <input
                            type='password'
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