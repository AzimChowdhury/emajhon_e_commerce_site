import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb'
import './Shop.css';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Shop = () => {
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [size, page])
    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages)
            })
    }, [])



    const addToCart = (product) => {
        let newCart = [];
        const existingProduct = cart.find(item => item._id === product._id);
        if (!existingProduct) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rest = cart.filter(item => item._id !== product._id);
            existingProduct.quantity = existingProduct.quantity + 1;
            newCart = [...rest, existingProduct];
        }
        setCart(newCart)
        addToDb(product._id)
    }

    return (
        <div id='shop' className='shop'>
            <div className='products'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product._id}
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
            <div className='pagination'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button className={page === number ? 'selected' : ''} onClick={() => setPage(number)}>{number + 1}</button>)

                }
                <select onChange={e => setSize(e.target.value)} className='dropdown' >
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;