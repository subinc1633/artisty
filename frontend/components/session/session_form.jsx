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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render() {
        const signingUp = () => {
            if (this.props.formType === 'signup') {
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
                <h2>{this.props.formType}</h2>
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
                    </label><br />
                    <button>{this.props.formType}</button>
                </form>
            </div>
        );
    }
};

export default SessionForm;