import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./products.css";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    const handleAddToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
        dispatch({ type: "INCREMENT_CART_LENGTH" });
    }

    return (
        <div className="product-list">
            <h1>Products</h1>
                {products.map(product => (
                    <div className="product-card" key={product.price}>
                        <h2>{product.title}</h2>
                        <img src={require(`../images/${product.filename}`)} alt={product.title} />
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                    </div>
                ))}
        </div>
    );
}

export default ProductList;