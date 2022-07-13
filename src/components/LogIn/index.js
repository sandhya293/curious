import React from 'react'

const Login = () => {
    return (
        <>
            <div class="popup" id="popup-1">
                <div class="content">
                    <div class="close-btn" onclick="togglePopup()">×</div>
                    <h1>Sign in</h1>
                    <div class="input-field"><input placeholder="Email" class="validate"/></div>
                    <div class="input-field"><input placeholder="Password" class="validate"/></div>
                    <button class="second-button">Sign in</button>
                    <p>Don't have an account? <a href="/signup.html">Sign Up</a></p>
                </div>
            </div>
            <button onclick="togglePopup()" class="first-button">Sign In</button>
        </>
    )
}

export default Login