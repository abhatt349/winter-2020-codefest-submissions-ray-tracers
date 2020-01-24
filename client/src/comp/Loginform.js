import React from 'react';
import './App.css';

class Loginform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleEmailChange(event) {
        this.setState({email: event.target.value});
      }

      handlePasswordChange(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Email submitted: ' + this.state.email);
        alert('Password submitted: ' + this.state.password);
        event.preventDefault();
      }

      onSubmit = () => {
        console.log(this.state)
      }
    
      render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <input type = "text" 
                        email={this.state.email} 
                        onChange={this.handleEmailChange} 
                        placeholder = {this.props.name}
                    />
                    <input type = "password" 
                        password={this.state.password} 
                        onChange={this.handlePasswordChange} 
                        placeholder = {this.props.name1}
                    />
                    <input type="submit" 
                        value= {this.props.name2} 
                        onClick = {() => this.onSubmit()}
                    />
                </form>
            );
        }
}
export default Loginform;