import React from 'react';
import './App.css'
import Signup from './Signup';
import Emailpassbox from './Emailpassbox';

function Signupbox(props){
    return(
        <div className = "signupbox">
            <div>
                <h1>Grade Wizard</h1>
                <Emailpassbox name = "Email"/>
                <Emailpassbox name = "Password"/>
                <Emailpassbox name = "Confirm Password"/>
            </div>
        </div>
    );
}

export default Signupbox;