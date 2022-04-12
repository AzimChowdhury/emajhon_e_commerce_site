import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from "../../hooks/useCart";
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const removeItem = (product) => {
        const rest = cart.filter(item => item.id !== product.id);
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop'>
            <div className="items">
                {
                    cart.map(item => <ReviewItem
                        key={item.id}
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