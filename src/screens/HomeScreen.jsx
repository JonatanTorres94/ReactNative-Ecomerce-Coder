import React from "react";
import Header from "../components/Header";
import { View } from "react-native";
import { Categories } from "../components/Categories";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = ({navigation}) => {


    return (
        <View>
            <Header/>
            <Categories navigation={navigation}/>
        </View>
    )
}