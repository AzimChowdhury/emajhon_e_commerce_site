import React from 'react';
import './Home.css'
import image from '../../images/shop.jpg'
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className='mainDiv'>
            <div className='headText'>
                <small>sale up to 70% off</small>
                <h1>New Collection for all</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <Link to={'/shop'}><button>Shop Now</button></Link>
            </div>
            <img src={image} alt="" />
        </div>
    );
};

export default Main;