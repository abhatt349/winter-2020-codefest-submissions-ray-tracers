import React from 'react'
import './App.css'
import Emailpassbox from './Emailpassbox'
import Confirmbutton from './Confirmbutton'
import Textbelowlogin from './Textbelowlogin'
import Loginform from './Loginform'

function Login(){
    return(
        <div>
            <div className = "loginbox">
                <h1>Grade Wizard</h1>
                <Emailpassbox name = "Email"/>
                <Emailpassbox name = "Password"/>
                <Confirmbutton name = "Log In"/>
                <Textbelowlogin name = "Don't have an account? " name1 = "Sign up." link = "http://localhost:3002/Signup"/>
                <Loginform onSubmit = {fields => }/>
            </div>
        </div>
    )
}

export default Login;