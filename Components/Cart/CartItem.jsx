import React from "react";
import { Context, useContext } from "react";
import { View, Text, Image } from "react-native";
import GoodsItem from "../pages/GoodsItem/GoodsItem";

const CartItem = (probs) => {
    const { item } = probs;
    const { increase, decrease, removeItem } = useContext(Context)

    return (
        <View>
            <View>
                <Image source={GoodsItem.name} />
            </View>
        </View>
    )
}