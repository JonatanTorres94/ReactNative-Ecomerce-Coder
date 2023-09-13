import React from "react";
import Header from "../components/Header";
import { View } from "react-native";
import { Categories } from "../components/Categories";

export const HomeScreen = () => {

    return (
        <View>
            <Header/>
            <Categories category='laptops'/>
        </View>
    )
}