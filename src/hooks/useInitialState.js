import { useState } from "react";

const initialState = {
	cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (product) => {
		setState({
			...state,
			cart: [...state.cart, product] //payload
		});
	};

    const removeFromCart = (product) => {
        setState({
            ...state,
            cart: state.cart.filter(p => p.id !== product.id)
        })
    }


	return {
		state,
		addToCart,
        removeFromCart
	}
}

export default useInitialState;