import React from "react";
import Header from "../components/Header";
import { ActivityIndicator, View } from "react-native";
import { Categories } from "../components/Categories";
import { useNavigation } from "@react-navigation/native";
import { useGetCategoriesQuery } from "../services/ecApi";

export const HomeScreen = ({ navigation }) => {

    const {  isLoading } = useGetCategoriesQuery();


    return (
        <View>
            {isLoading ? (
                <View style={{flex:1}}>
                    <ActivityIndicator style={{ flex: 1, justifyContent:'center', alignItems:'center', top:150 }} size='small' color='#0000FF' />

                </View>
            ) : (
                <View>
                    <Header />
                    <Categories navigation={navigation} />
                </View>
            ) }
        </View>
    )}