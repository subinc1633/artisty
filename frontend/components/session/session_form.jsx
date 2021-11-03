import React from 'react';
import { Redirect } from 'react-router-dom';

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
        this.props.processForm(currentUser);
        if (currentUser.email) {
            this.props.closeModal();
            return (<Redirect to="/" />)
        } else {
            null
        };
    }

    loginDemo(e) {
        e.preventDefault();
        const demoUser = Object.assign({}, {
            email: 'peperoroll@gmail.com',
            password: 'peppero'
        });
        this.props.processForm(demoUser);
        this.props.closeModal();
        return (<Redirect to="/" />)
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors() {
        return (
            this.props.errors ? (
                <ul className='form-errors'>
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
<<<<<<< HEAD
                <label>Name<br />
                    <input
                        type='text'
                        value={this.state.name}
                        onChange={this.update('name')} />
                    <br />
                </label>
=======
                    <label><br />Name<br />
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')} />
                    </label>
                );
            }
        };

        const loggingIn = () => {
            if (this.props.formType === 'Sign in') {
                return (
                <div>
                    <h3 className='line'><span>OR</span></h3>
                    <br /><br />
                    <button className='demo' onClick={this.loginDemo}>Login as Demo User</button>
                </div>
>>>>>>> splash
            )}
        };

        return (
            <div>
<<<<<<< HEAD
                <button onClick={this.handleSubmit}>Demo User</button>
                <h2>{this.props.formType}</h2>
=======
>>>>>>> splash
                { this.renderErrors() }
                <form className='session-form' onSubmit={this.handleSubmit}>
                    <label>Email address<br/>
                        <input
<<<<<<< HEAD
                            type='text'
=======
                            type="email"
>>>>>>> splash
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label><br/>
                    <label>Password<br/>
                        <input
<<<<<<< HEAD
                            type='password'
                            value={this.state.password} 
=======
                            type="password"
                            value={this.state.password}
>>>>>>> splash
                            onChange={this.update('password')} />
                    </label>
                    { signingUp() }
                    <br /><br />
                    <button className='process'>{this.props.formType}</button>
                    <br/><br/>
                    { loggingIn() }
                </form>
            </div>
        );
    }
};

export default SessionForm;