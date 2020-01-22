import React from 'react';
import './App.css'
import Signup from './Signup';
import Emailpassbox from './Emailpassbox';
import Confirmbutton from './Confirmbutton';
import Textbelowlogin from './Textbelowlogin';

function Signupbox(props){
    return(
        <div className = "signupbox">
            <div>
                <h1>Grade Wizard</h1>
                <Emailpassbox name = "Email"/>
                <Emailpassbox name = "Password"/>
                <Emailpassbox name = "Confirm Password"/>
                <Confirmbutton name = "Sign Up"/>
                <Textbelowlogin name = "Already have an account? " name1 = "Log in."/>
            </div>
        </div>
    );
}

export default Signupbox;