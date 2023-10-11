import {View, Text, FlatList,StyleSheet} from 'react-native'
import React from 'react'
import { CategoryItem } from './CategoryItem'
import { colors } from '../themes/colors';
import {useSelector} from 'react-redux'
import { useGetCategoriesQuery } from "../services/ecApi";

export const Categories = ({navigation}) =>{

    //const categories = useSelector((state) => state.homeSlice.allCategories )
    const { data: categories } = useGetCategoriesQuery();
    
    return (
        <View style={styles.categoriesContainer}>
            <FlatList
                data={categories}
                keyExtractor={(key) => key}
                renderItem={({item}) => <CategoryItem item={item} navigation={navigation}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    categoriesContainer: {
      backgroundColor: colors.secondary,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
  });