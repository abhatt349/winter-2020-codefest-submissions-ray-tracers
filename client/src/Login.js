import React from 'react'
import './App.css'
import Emailpassbox from './Emailpassbox'
import Confirmbutton from './Confirmbutton'
import Textbelowlogin from './Textbelowlogin'

function Login(){
    return(
        <div>
            <div className = "loginbox">
                <h1>Grade Wizard</h1>
                <Emailpassbox name = "Email"/>
                <Emailpassbox name = "Password"/>
                <Confirmbutton name = "Login"/>
                <Textbelowlogin name = "Don't have an account? " name1 = "Sign up."/>
            </div>
        </div>
    )
}

export default Login;