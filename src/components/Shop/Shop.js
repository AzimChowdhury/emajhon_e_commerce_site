import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, restoreFromDb, removeFromDb, deleteShoppingCart } from '../../utilities/fakedb'
import './Shop.css';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedData = restoreFromDb();
        const savedCart = [];
        for (const id in storedData) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedData[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])


    const addToCart = (product) => {
        let newCart = [];
        const existingProduct = cart.find(item => item.id === product.id);
        if (!existingProduct) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rest = cart.filter(item => item.id !== product.id);
            existingProduct.quantity = existingProduct.quantity + 1;
            newCart = [...rest, existingProduct];
        }
        setCart(newCart)
        addToDb(product.id)
    }

    return (
        <div id='shop' className='shop'>
            <div className='products'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className='order-summery'>
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;