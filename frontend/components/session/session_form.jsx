import React from 'react';

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
        this.props.processForm(currentUser).then(
            () => {
                this.props.closeModal();
            },
            () => null
        );
    }

    loginDemo(e) {
        e.preventDefault();
        const demoUser = Object.assign({}, {
            email: 'peperoroll@gmail.com',
            password: 'peppero'
        });
        this.props.processForm(demoUser);
        this.props.closeModal();
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul className="form-errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`} className="session-errors">
                            {error}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return null;
        }
    }

    render() {
        const signingUp = () => {
            if (this.props.formType === 'Sign up') {
                return (
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
                    <h3 className="line"><span>OR</span></h3>
                    <br /><br />
                    <button className="demo" onClick={this.loginDemo}>Login as Demo User</button>
                </div>
            )}
        };

        return (
            <div>
                { this.renderErrors() }
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <label>Email address<br/>
                        <input
                            type="email"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label><br/>
                    <label>Password<br/>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    { signingUp() }
                    <br /><br />
                    <button className="process">{this.props.formType}</button>
                    <br/><br/>
                    { loggingIn() }
                    <br/><br/>
                </form>
            </div>
        );
    }
};

export default SessionForm;