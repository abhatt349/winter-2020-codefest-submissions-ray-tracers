import React from 'react';
import './App.css'

function Confirmbutton(props){
    return(
        <div className = "confirmbutton">
            <div>
                <h3>{props.name}</h3>
            </div>
        </div>
    );
}

export default Confirmbutton;