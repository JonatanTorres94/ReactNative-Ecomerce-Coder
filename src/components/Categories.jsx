import {View, Text, FlatList} from 'react-native'
import React from 'react'
import { categories } from '../data/categories'
import { CategoryItem } from './CategoryItem'


export const Categories = ({navigation}) =>{


    return (
        <View style={{backgroundColor:'blue'}}>
            <FlatList
                data={categories}
                keyExtractor={(key) => key}
                renderItem={({item}) => <CategoryItem item={item} navigation={navigation}/>}
            />
        </View>
    )
}