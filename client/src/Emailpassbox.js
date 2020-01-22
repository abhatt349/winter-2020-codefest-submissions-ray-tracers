import React from 'react';
import './App.css'
import Login from './Login';

function Emailpassbox(props){
    return(
        <div className = "emailpassbox">
            <div>
                <h3>{props.name}</h3>
            </div>
        </div>
    );
}

export default Emailpassbox;