import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './Logout'
import Profile from './Profile'

const Login = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <h1 style={{backgroundColor: 'dark'}}>Axcess Beta Login Page</h1>
            <br /> 
            <h3 style={{backgroundColor: 'dark'}}>if you're invited and have special code than you may login</h3>
            <h3 style={{backgroundColor: 'dark'}}>Using Single-Sign-On with Google</h3>

            <br />
            <>
            <LoginButton />
            <LogoutButton />
            <Profile />
            </>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Login;
