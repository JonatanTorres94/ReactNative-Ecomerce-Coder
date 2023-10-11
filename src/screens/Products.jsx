import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import ProductItems from '../components/ProductItems'
import { useSelector } from 'react-redux'
import { useGetProductsQuery } from '../services/ecApi'

const Products = ({ route, navigation }) => {


    const [productFiltered, setProductFiltered] = useState([])
    const [text, setText] = useState('')

    const { item } = route.params

    const { data } = useGetProductsQuery();


    useEffect(() => {
        setTimeout(() => {
            if (data != null) {
                const filterByCategory = data.filter((el) => el.category === item)
                setProductFiltered(filterByCategory)
            }
        }, 500)


        if (text) {
            const titleProduct = data.filter(
                (el) => el.title.toLowerCase() === text.toLowerCase()
            )
            setProductFiltered(titleProduct)
        }


    }, [item, text])

    return (
        <View>
            <Header title='Products' />

            <Search text={text} setText={setText} />
            <FlatList
                data={productFiltered}
                keyExtractor={(item) => item.id.toString()}//(item) => item.id.toString()}
                renderItem={({ item }) => <ProductItems navigation={navigation} item={item} />}

            />

        </View>
    )
}

export default Products