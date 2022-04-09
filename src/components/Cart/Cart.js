import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    let quantity = 0;
    for (const item of cart) {
        quantity = quantity + item.quantity;
        total = total + item.price * item.quantity;
        shipping = shipping + item.shipping;
        tax = total * 5 / 100;
        grandTotal = total + shipping + tax;
        console.log(item.quantity)
    }
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>Selected Items:{quantity} </p>
            <p>Total Price: ${total} </p>
            <p>Total shipping cost:$ {shipping}</p>
            <p>Tax(5%):${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            <button>Clear Cart</button>
            <br />
            {props.children}
        </div>
    );
};

export default Cart;