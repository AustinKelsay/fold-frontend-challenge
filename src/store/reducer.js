import { ADD_TO_CART, INCREMENT_CART_LENGTH, REMOVE_FROM_CART, DECREMENT_CART_LENGTH } from "./actions";
import prods from "../api/products.json";

const productsWithQuantity = prods.map(product => {
    return {
        ...product,
        quantity: 0,
    };
})

const initialState = {
  products: productsWithQuantity,
  cart: [],
  cartLength: 0,
};

const Reducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
        // If the product is already in the cart, increment the quantity without mutating the state
        const productInCart = state.cart.find(product => product.id === action.payload.id);
        if (productInCart) {
            return {
                ...state,
                cart: state.cart.map(product => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                        };
                    }
                    return product;
                }
                ),
            };
        }
        // Otherwise, add the product to the cart and increment the quantity
        return {
            ...state,
            cart: [...state.cart, {...action.payload, quantity: +1}],
        };
    case REMOVE_FROM_CART:
        // If the product is in the cart and has a quantity of more than 1, decrement the quantity without mutating the state
        const productInCartWithQuantity = state.cart.find(product => product.id === action.payload.id);
        if (productInCartWithQuantity && productInCartWithQuantity.quantity > 1) {
            return {
                ...state,
                cart: state.cart.map(product => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity - 1,
                        };
                    }
                    return product;
                }),
            };
        }
        // Otherwise, remove the product from the cart
        const newCart = state.cart.filter(item => item.filename !== action.payload.filename);
        return {
            ...state,
            cart: newCart
        }
    case INCREMENT_CART_LENGTH:
        return {
            ...state,
            cartLength: state.cartLength + 1,
        };
    case DECREMENT_CART_LENGTH:
        return {
            ...state,
            cartLength: state.cartLength - 1,
        };
    default:
      return state;
  }
};

export default Reducer;