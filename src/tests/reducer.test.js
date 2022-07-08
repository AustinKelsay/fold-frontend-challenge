import reducer from "../store/reducer"
import expect from "expect"
import * as actions from "../store/actions"
import prods from "../api/products.json"

const mockInitialState = {
    products: prods.map(product => {
        return {
            ...product,
            quantity: 0,
        };
    }),
    cart: [],
    cartLength: 0,
}

describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, mockInitialState)).toEqual(mockInitialState);
    });
    it('should handle ADD_TO_CART', () => {
        const mockAction = {
            type: actions.ADD_TO_CART,
            payload: {
                id: 1,
                title: "Product 1",
                description: "This is a product",
                price: 10,
                filename: "product1.jpg",
            }
        }
        const mockState = {
            ...mockInitialState,
            cart: [{
                id: 1,
                title: "Product 1",
                description: "This is a product",
                price: 10,
                filename: "product1.jpg",
                quantity: 1,
            }],
            cartLength: 0,
        }
        expect(reducer(mockInitialState, mockAction)).toEqual(mockState);
    });
    it('should handle INCREMENT_CART_LENGTH', () => {
        const mockAction = {
            type: actions.INCREMENT_CART_LENGTH,
        }
        const mockState = {
            ...mockInitialState,
            cartLength: 1,
        }
        expect(reducer(mockInitialState, mockAction)).toEqual(mockState);
    });
    it('should handle DECREMENT_CART_LENGTH', () => {
        const localMockState = {
            ...mockInitialState,
            cartLength: 1,
        }
        const mockAction = {
            type: actions.DECREMENT_CART_LENGTH,
        }
        const mockState = {
            ...mockInitialState,
            cartLength: 0,
        }
        expect(reducer(localMockState, mockAction)).toEqual(mockState);
    });
    it('should handle REMOVE_FROM_CART', () => {
        const mockAction = {
            type: actions.REMOVE_FROM_CART,
            payload: {
                id: 1,
                title: "Product 1",
                description: "This is a product",
                price: 10,
                filename: "product1.jpg",
            }
        }
        const mockState = {
            ...mockInitialState,
            cart: [],
            cartLength: 0,
        }
        expect(reducer(mockInitialState, mockAction)).toEqual(mockState);
    });
});
