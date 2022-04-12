import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className='header'>
            <img src={logo} />
            <div>
                <Link to={'/home'}>Home</Link>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/inventory'}>Inventory</Link>
                <Link to={'/about'}>About</Link>
                {
                    user ?
                        <button onClick={handleSignOut}>Sing Out</button>
                        :
                        <Link to={'/login'}>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;