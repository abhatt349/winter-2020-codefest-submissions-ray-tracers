import React from 'react';
import './App.css'
import Textbelowlogin from './Textbelowlogin';
import Signupform from './Signupform';

function Signupbox(props){
    return(
        <div className = "signupbox">
            <div>
                <h1>Grade Wizard</h1>
                <Signupform name = "Email" 
                    name1 = "Password" 
                    name2 = "Confirm Password" 
                    name3 = "Sign Up" 
                    onSubmit = {fields => this.onSubmit(fields)}
                />
                <Textbelowlogin name = "Already have an account? " 
                    name1 = "Log in." 
                    link = "http://localhost:3000/Login"
                />
            </div>
        </div>
    );
}

export default Signupbox;