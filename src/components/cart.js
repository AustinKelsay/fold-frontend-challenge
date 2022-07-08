import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const handleRemoveFromCart = (product) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
        dispatch({ type: "DECREMENT_CART_LENGTH" });
    }

    return (
        <div className="cart">
            <h1>Cart</h1>
            { cart.length > 0 ?
            cart.map(product => (
                    <div className="cart-item" key={product.price}>
                        <h2>{product.title}</h2>
                        <img src={require(`../images/${product.filename}`)} alt={product.title} />
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <button className="remove-button" onClick={() => handleRemoveFromCart(product)}>Remove</button>
                        <span>Qty: {product.quantity}</span>
                    </div>
                )) :    <p>Your cart is empty</p>
            }
        </div>
    );
}

export default Cart