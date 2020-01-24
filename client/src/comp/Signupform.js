import React from 'react';
import './App.css';

class Signupform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmpassword: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleEmailChange(event) {
        this.setState({email: event.target.value});
      }

      handlePasswordChange(event) {
        this.setState({password: event.target.value});
      }

      handleConfirmPasswordChange(event) {
        this.setState({confirmpassword: event.target.value});
      }

      handleSubmit(event) {
        alert('Email submitted: ' + this.state.email);
        alert('Password submitted: ' + this.state.password);
        alert('Confirm Password submitted: ' + this.state.confirmpassword);
        event.preventDefault();
      }

      onSubmit = () => {
        console.log(this.state)
      }

      render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <input
                      type = "text"
                      email={this.state.email}
                      onChange={this.handleEmailChange}
                      placeholder={this.props.name}/>
                    <input type = "password"
                        password={this.state.password}
                        onChange={this.handlePasswordChange}
                        placeholder = {this.props.name1}
                    />
                    <input type = "password"
                        confirmpassword={this.state.confirmpassword}
                        onChange={this.handleConfirmPasswordChange}
                        placeholder = {this.props.name2}
                    />
                    <input type="submit"
                        value= {this.props.name3}
                        onClick = {() => this.onSubmit()}
                    />
                </form>
            );
      }
}
export default Signupform;
