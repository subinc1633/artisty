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
        this.props.processForm(demoUser);
        return this.props.closeModal();
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors() {
        return (
            this.props.errors ? (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
            ) : null
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
                { this.renderErrors() }
                <form className='session-form' onSubmit={this.handleSubmit}>
                    <label>Email address<br/>
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
                    <button className='process'>{this.props.formType}</button>
                    <br/><br/>
                    <h3 className='line'><span>OR</span></h3>
                    <br /><br />
                    <button className='demo' onClick={this.loginDemo}>Login as Demo User</button>
                </form>
            </div>
        );
    }
};

export default SessionForm;