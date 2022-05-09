import React from 'react';
import useCart from "../../hooks/useCart";
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [cart, setCart] = useCart();
    const removeItem = (product) => {
        const rest = cart.filter(item => item._id !== product._id);
        setCart(rest)
        removeFromDb(product._id)
    }
    return (
        <div className='shop'>
            <div className="items">
                {
                    cart.map(item => <ReviewItem
                        key={item._id}
                        item={item}
                        removeItem={removeItem}
                    ></ReviewItem>)
                }
            </div>
            <div className="order-summery">
                <Cart cart={cart}>
                    <Link to='/shipping'>
                        <button>Proceed shipment</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;