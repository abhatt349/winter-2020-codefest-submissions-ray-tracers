import React from 'react';
import './App.css';

class Loginform extends React.Component{
    
    state = {
        email: '',
        password: '',
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            email: '',
            password: '',
        })
    };

    render(){
        return(
            <div>
                <div className = "loginform">
                    <form>
                        <input 
                            name = "email"
                            placeholder = "Email" 
                            value = {this.state.email} 
                            onChange = {e => this.change(e)}
                        />
                        <br />
                        <input 
                            name = "password"
                            type = "password"
                            placeholder = "Password" 
                            value = {this.state.password} 
                            onChange = {e => this.change(e)}
                        />
                        <br />
                        <button onClick = {e => this.onSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default Loginform;