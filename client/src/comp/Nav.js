import React from 'react';
import { Link } from 'react-router-dom';

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

                <Link style = {navStyle} to = '/Class'>
                    <li>Class</li>
                </Link>

                <Link style = {navStyle} to = '/Login'>
                    <li>Login</li>
                </Link>

                <Link style = {navStyle} to = '/Signup'>
                    <li>Signup</li>
                </Link>
            </ul>
        </nav>

    )
}

export default Nav;
