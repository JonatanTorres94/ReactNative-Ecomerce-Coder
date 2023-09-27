import { View, Text, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import ProductItems from '../components/ProductItems'
import {useSelector} from 'react-redux'

const Products = ({ route, navigation}) => {


    const [productFiltered, setProductFiltered] = useState([])
    const [text, setText] = useState('')

    const {item} = route.params

    const products = useSelector((state) => state.homeSlice.allProducts)
    



    useEffect(() => {

        const filterByCategory = products.filter((el) => el.category === item )
        setProductFiltered(filterByCategory)
        
        if (text){
            const titleProduct = products.filter(
                (el) => el.title.toLowerCase() === text.toLowerCase())
                setProductFiltered(titleProduct)
        }


    }, [item, text])
    
    return (
        <View>
            <Header title='Products' />
            
            <Search text={text} setText={setText} />
            <FlatList
                data={productFiltered}
                keyExtractor={products.id}
                renderItem={({item}) => <ProductItems navigation={navigation} item={item} />}
                
            />

        </View>
    )
}

export default Products