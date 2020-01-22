import React from 'react';
import './App.css'

function Textbelowlogin(props){
    return(
        <div className = "textbelowlogin">
            <div>
                <p>{props.name}<a 
                    className = "textbelowlogin-link"
                    href = "http://localhost:3002/Signup"
                    target = "_blank"
                    rel = "noopener no referrer"
                    >
                        {props.name1}
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Textbelowlogin;