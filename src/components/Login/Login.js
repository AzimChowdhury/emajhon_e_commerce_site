import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const signIn = () => {
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='login-form'>
            <h2>Login</h2>
            <p>Email</p>
            <input onBlur={handleEmailBlur} type="email" placeholder='Email' />
            <p>Password</p>
            <input onBlur={handlePasswordBlur} type="password" placeholder='password' />
            <br />
            <p style={{ color: 'red' }}>{error?.message}</p>
            <button onClick={signIn} id='signIn'>Login</button>
            <p className='p'>New to Emajhon? <Link to='/signup'>Sign Up</Link></p>
            <div className='or'>
                <div></div>
                <p className='p'>or</p>
                <div></div>
            </div>
            <button id='googleSignIn'>Continue with Google</button>
        </div >
    );
};

export default SignUp;