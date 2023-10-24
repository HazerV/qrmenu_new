import React, { useState, useContext, createContext } from "react";
import axios from "axios";
import { CartContext } from "../pages/Cart/CartContext";





const Store = () => {

    

    const [items, setItems] = useState([
        {
            id: 1,
            name: 'salad1',
            imagePath: 'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'
        },
        {
            id: 2,
            name: 'salad2',
            imagePath: 'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'
        },
    ]);

    const CartContext = useContext([items])

    return (
        <CartContext.Provider>
            
        </CartContext.Provider>
    )

}



const addProd = () => {
    setItems( [...items, {
        id: 3,
        name: 'salad2',
        imagePath: 'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'
    }])
}

export default { Store,
                addProd }