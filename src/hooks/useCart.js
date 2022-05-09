import { useEffect, useState } from "react";
import { restoreFromDb } from "../utilities/fakedb";


const useCart = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedData = restoreFromDb();
        const savedCart = [];
        const keys = Object.keys(storedData);
        console.log(keys)
        fetch('http://localhost:5000/productsByKeys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products)
                for (const id in storedData) {
                    const addedProduct = products.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedData[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }
                }
                setCart(savedCart);
            })

    }, [])
    return [cart, setCart];
}
export default useCart;