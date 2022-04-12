import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipping = () => {
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [Address, setAddress] = useState('')
    const [Phone, setPhone] = useState('')
    const [error, setError] = useState('')

    const handleNameBlur = (event) => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }
    const createUser = () => {

    }
    return (
        <div className='login-form'>
            <h2>Shipping Information</h2>
            <p>Email</p>
            <input value={user?.email} readOnly type="email" placeholder='Email' />
            <p>Name</p>
            <input onBlur={handleNameBlur} type="text" placeholder='Name' />
            <p>Phone Number</p>
            <input onBlur={handlePhoneBlur} type="password" placeholder='Phone Number' />
            <p>Address</p>
            <input onBlur={handleAddressBlur} type="text" placeholder='Address' />

            <br />
            <p style={{ color: 'red' }}>{error}</p>
            <button onClick={createUser} id='signIn'>Shippment</button>
        </div >
    );
};

export default Shipping;