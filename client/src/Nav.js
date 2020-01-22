import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){
    const navStyle = {
        color: 'lightblue'
    }
    return(
        <nav>
            <h3>Grade Wizard</h3>
            <ul className = "navlink">
                <Link style = {navStyle} to = '/Home'>
                    <li>Home</li>
                </Link>
            </ul>
        </nav>
            
    )
}

export default Nav;