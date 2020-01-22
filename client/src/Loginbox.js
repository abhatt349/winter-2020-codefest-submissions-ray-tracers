import React from 'react';
import './App.css'
import Login from './Login';
import Emailpassbox from './Emailpassbox';

function Loginbox(props){
    return(
        <div className = "loginbox">
            <h1>Grade Wizard</h1>
            <Emailpassbox name = "Email"/>
            <Emailpassbox name = "Password"/>
        </div>
    );
}

export default Loginbox;