import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

function ReviewItem({ removeItem, item }) {
    const { name, img, price, shipping, quantity } = item;
    return (
        <div className='review-cart'>
            <img src={img} alt="" />
            <div className='item-details'>
                <h5>{name}</h5>
                <p>price: $ {price}</p>
                <p><small>quantity: {quantity}</small></p>
                <p><small>shipping : $ {shipping}</small></p>
            </div>
            <div onClick={() => removeItem(item)} className='delete-icon'>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default ReviewItem;
