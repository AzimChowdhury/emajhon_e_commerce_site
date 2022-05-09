import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const createUser = () => {
        if (password !== confirmPassword) {
            setError('your two password did not match');
            return;
        }
        if (password.length < 6) {
            setError('password must be at least 6 character');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/shop');
    }

    return (
        <div className='login-form'>
            <h2>Sign up</h2>
            <p>Email</p>
            <input onBlur={handleEmailBlur} type="email" placeholder='Email' />
            <p>Password</p>
            <input onBlur={handlePasswordBlur} type="password" placeholder='password - at least 6 character' />
            <p>Confirm Password</p>
            <input onBlur={handleConfirmPasswordBlur} type="password" placeholder='confirm password' />
            <br />
            <p style={{ color: 'red' }}>{error}</p>
            <button onClick={createUser} id='signIn'>Sign Up</button>
            <p className='p'>Already have an account? <Link to='/login'>Login</Link></p>
            <div className='or'>
                <div></div>
                <p className='p'>or</p>
                <div></div>
            </div>
            <button id='googleSignIn'>Continue with Google</button>
        </div >
    )
}

export default SignUp;
