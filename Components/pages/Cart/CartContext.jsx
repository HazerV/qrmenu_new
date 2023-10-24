import React, { useState, createContext} from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = ({cartItem}) => {
        // cartItems: {}, {}
        // setCartItems([{}, {}, {}])
        setCartItems([...cartItems, cartItem]);

    }

    return (
        <></>
    );
}
// const CartProvider = ({ children }) => {
    
//     const [cartItems, setCartItems] = useState([])
//     const removeFromCart = (productId) => {
//         setCartItems((prevCartItems) => 
//         prevCartItems.filter((item) => item.id !== productId))
//     }
//     return (
//         {children}
//     )
// }

export {CartContext, CartProvider}