import React from 'react';
import './App.css'
import Login from './Login';
import Emailpassbox from './Emailpassbox';

function Loginbox(props){
    return(
        <div className = "loginbox">
            <div>
                <h1>Grade Wizard</h1>
                <Emailpassbox/>
                <Emailpassbox/>
            </div>
        </div>
    );
}

export default Loginbox;