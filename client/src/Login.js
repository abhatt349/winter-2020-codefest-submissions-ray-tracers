import React from 'react'
import Loginbox from './Loginbox'
import './App.css'
import Emailpassbox from './Emailpassbox'

function Login(){
    return(
        <div>
            <Loginbox/>
            <Emailpassbox/>
        </div>
    )
}

export default Login;