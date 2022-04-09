import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { product, addToCart } = props;
    const { name, img, price, seller, ratings } = product;

    return (
        <div className='card'>
            <img width={'250px'} src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price: ${price}</h5>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} stars</p>
            <button onClick={() => addToCart(product)} className='button'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;